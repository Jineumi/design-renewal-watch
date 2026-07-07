import AppKit
import CoreGraphics
import ImageIO
import Foundation

let root = "/Users/webdesign/Documents/Codex/2026-07-02/new-chat/outputs/design-watch/assets"
let targetWidth = 1920
let files = [
    "vivasam-full-clean.png",
    "tsherpa-full-clean.png",
    "mteacher-full-clean.png",
    "jihak-full-clean.png",
    "vivasam-secondary-full-clean.png",
    "tsherpa-secondary-full-clean.png",
    "mteacher-middle-full-clean.png",
    "mteacher-high-full-clean.png",
    "jihak-middle-full-clean.png",
    "jihak-high-full.png"
]

func writePNG(_ image: NSImage, to url: URL) throws {
    guard
        let tiff = image.tiffRepresentation,
        let rep = NSBitmapImageRep(data: tiff),
        let png = rep.representation(using: .png, properties: [:])
    else {
        throw NSError(domain: "normalize", code: 1, userInfo: [NSLocalizedDescriptionKey: "Failed to encode PNG"])
    }
    try png.write(to: url)
}

for file in files {
    let url = URL(fileURLWithPath: root).appendingPathComponent(file)
    guard
        let source = CGImageSourceCreateWithURL(url as CFURL, nil),
        let image = CGImageSourceCreateImageAtIndex(source, 0, nil)
    else {
        print("skip \(file)")
        continue
    }

    if image.width == targetWidth {
        print("keep \(file) \(image.width)x\(image.height)")
        continue
    }

    let canvasSize = NSSize(width: targetWidth, height: image.height)
    let result = NSImage(size: canvasSize)
    result.lockFocus()
    NSColor.white.setFill()
    NSRect(origin: .zero, size: canvasSize).fill()
    NSGraphicsContext.current?.imageInterpolation = .high

    let x = max(0, (targetWidth - image.width) / 2)
    NSImage(cgImage: image, size: NSSize(width: image.width, height: image.height))
        .draw(in: NSRect(x: x, y: 0, width: image.width, height: image.height),
              from: NSRect(origin: .zero, size: NSSize(width: image.width, height: image.height)),
              operation: .copy,
              fraction: 1)
    result.unlockFocus()

    try writePNG(result, to: url)
    print("normalize \(file) \(image.width)x\(image.height) -> \(targetWidth)x\(image.height)")
}
