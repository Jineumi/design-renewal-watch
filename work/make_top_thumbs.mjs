import path from "node:path";
import sharp from "sharp";

const root = path.resolve(process.cwd(), "outputs/design-watch/assets");

const jobs = [
  ["vivasam-full-clean.png", "vivasam-thumb.png"],
  ["tsherpa-full-clean.png", "tsherpa-thumb.png"],
  ["mteacher-full-clean.png", "mteacher-thumb.png"],
  ["jihak-full-clean.png", "jihak-thumb.png"],
  ["vivasam-secondary-full-clean.png", "vivasam-secondary-thumb.png"],
  ["tsherpa-secondary-full-clean.png", "tsherpa-secondary-thumb.png"],
  ["mteacher-middle-full-clean.png", "mteacher-middle-thumb.png"],
  ["mteacher-high-full-clean.png", "mteacher-high-thumb.png"],
  ["jihak-middle-full-clean.png", "jihak-middle-thumb.png"],
  ["jihak-high-full-clean.png", "jihak-high-thumb.png"],
];

for (const [sourceName, outputName] of jobs) {
  const source = path.join(root, sourceName);
  const output = path.join(root, outputName);
  const image = sharp(source);
  const metadata = await image.metadata();
  const width = metadata.width ?? 1920;
  const height = metadata.height ?? 1080;
  const cropHeight = Math.min(height, Math.round(width / (16 / 9)));

  await image
    .extract({ left: 0, top: 0, width, height: cropHeight })
    .resize(1920, 1080, { fit: "fill" })
    .png()
    .toFile(output);

  console.log(`${outputName} <- ${sourceName}`);
}
