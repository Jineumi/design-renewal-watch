import AppKit
import CoreGraphics
import ImageIO
import Foundation

struct Job {
    let source: String
    let output: String
}

let root = "/Users/webdesign/Documents/Codex/2026-07-02/new-chat/outputs/design-watch/assets"
let jobs: [Job] = [
    Job(source: "vivasam-full-clean.png", output: "vivasam-thumb.png"),
    Job(source: "tsherpa-full-clean.png", output: "tsherpa-thumb.png"),
    Job(source: "mteacher-full-clean.png", output: "mteacher-thumb.png"),
    Job(source: "jihak-full-clean.png", output: "jihak-thumb.png"),
    Job(source: "vivasam-secondary-full-clean.png", output: "vivasam-secondary-thumb.png"),
    Job(source: "tsherpa-secondary-full-clean.png", output: "tsherpa-secondary-thumb.png"),
    Job(source: "mteacher-middle-full-clean.png", output: "mteacher-middle-thumb.png"),
    Job(source: "mteacher-high-full-clean.png", output: "mteacher-high-thumb.png"),
    Job(source: "jihak-middle-full-clean.png", output: "jihak-middle-thumb.png"),
    Job(source: "jihak-high-full-clean.png", output: "jihak-high-thumb.png")
]

func writePNG(_ image: NSImage, to url: URL) throws {
    guard
        let tiff = image.tiffRepresentation,
        let rep = NSBitmapImageRep(data: tiff),
        let png = rep.representation(using: .png, properties: [:])
    else {
        throw NSError(domain: "thumbnail", code: 1, userInfo: [NSLocalizedDescriptionKey: "Failed to encode PNG"])
    }
    try png.write(to: url)
}

for job in jobs {
    let sourceURL = URL(fileURLWithPath: root).appendingPathComponent(job.source)
    let outputURL = URL(fileURLWithPath: root).appendingPathComponent(job.output)

    guard
        let source = CGImageSourceCreateWithURL(sourceURL as CFURL, nil),
        let image = CGImageSourceCreateImageAtIndex(source, 0, nil)
    else {
        print("skip \(job.source)")
        continue
    }

    let width = image.width
    let height = image.height
    let targetRatio = 16.0 / 9.0
    let cropHeight = min(height, Int(Double(width) / targetRatio))
    let cropRect = CGRect(x: 0, y: 0, width: width, height: cropHeight)

    guard let cropped = image.cropping(to: cropRect) else {
        print("crop failed \(job.source)")
        continue
    }

    let targetSize = NSSize(width: 1920, height: 1080)
    let result = NSImage(size: targetSize)
    result.lockFocus()
    NSGraphicsContext.current?.imageInterpolation = .high
    NSImage(cgImage: cropped, size: NSSize(width: cropped.width, height: cropped.height))
        .draw(in: NSRect(origin: .zero, size: targetSize),
              from: NSRect(origin: .zero, size: NSSize(width: cropped.width, height: cropped.height)),
              operation: .copy,
              fraction: 1)
    result.unlockFocus()

    try writePNG(result, to: outputURL)
    print("\(job.output) <- \(job.source) (\(width)x\(height) -> 1920x1080)")
}
