/**
 * One-off generator for raster brand assets (OG image, favicons, touch
 * icons) built with sharp from the real brand logo. Not wired into the
 * build — social platforms and iOS need real raster files, so these are
 * generated once and committed to public/. Re-run manually with
 * `node scripts/generate-images.mjs` if the brand mark changes.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const logoPath = path.join(__dirname, "..", "src", "assets", "brand", "logo.png");

const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#050816"/>
      <stop offset="100%" stop-color="#0B1428"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.8" cy="0.15" r="0.6">
      <stop offset="0%" stop-color="rgba(50,213,131,0.35)"/>
      <stop offset="100%" stop-color="rgba(50,213,131,0)"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="rgba(159,178,214,0.10)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- orbit ring motif -->
  <ellipse cx="960" cy="470" rx="260" ry="150" transform="rotate(-18 960 470)" fill="none" stroke="rgba(50,213,131,0.35)" stroke-width="2" stroke-dasharray="4 10"/>
  <circle cx="960" cy="470" r="70" fill="#32D583" opacity="0.9"/>
  <circle cx="1130" cy="360" r="16" fill="#32D583"/>
  <circle cx="810" cy="560" r="10" fill="#32D583"/>

  <text x="164" y="122" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#F6F8FF">LeadOrbiq</text>

  <text x="96" y="270" font-family="Arial, sans-serif" font-size="58" font-weight="700" fill="#F6F8FF">
    <tspan x="96" dy="0">Turn Google Maps searches</tspan>
    <tspan x="96" dy="68">into organized lead lists</tspan>
  </text>
  <text x="96" y="410" font-family="Arial, sans-serif" font-size="26" fill="#AEBBD4">
    Chrome extension for local-business prospecting
  </text>

  <g transform="translate(96 450)">
    <rect width="360" height="46" rx="23" fill="rgba(255,255,255,0.06)" stroke="rgba(159,178,214,0.25)"/>
    <text x="30" y="30" font-family="Arial, sans-serif" font-size="20" fill="#F6F8FF" font-weight="600">Add to Chrome</text>
  </g>
</svg>
`;

async function main() {
  await mkdir(path.join(publicDir, "images"), { recursive: true });
  await mkdir(path.join(publicDir, "icons"), { recursive: true });

  // OG image: real logo composited at the top-left, next to the wordmark.
  const logoForOg = await sharp(logoPath).resize(72, 72).toBuffer();
  await sharp(Buffer.from(ogSvg))
    .composite([{ input: logoForOg, left: 96, top: 78 }])
    .png()
    .toFile(path.join(publicDir, "images", "og-default.png"));

  // Favicons / PWA icons: transparent background, letterboxed to a square
  // so the full circular mark stays intact instead of being cropped.
  const transparentSizes = [
    { file: "favicon-16.png", size: 16 },
    { file: "favicon-32.png", size: 32 },
    { file: "icon-192.png", size: 192 },
    { file: "icon-512.png", size: 512 },
  ];
  for (const { file, size } of transparentSizes) {
    await sharp(logoPath)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(publicDir, "icons", file));
  }

  // Apple touch icon: flattened onto white — iOS renders transparent PNG
  // corners as solid black on the home screen otherwise.
  await sharp(logoPath)
    .resize(180, 180, { fit: "contain", background: "#ffffff" })
    .flatten({ background: "#ffffff" })
    .png()
    .toFile(path.join(publicDir, "icons", "apple-touch-icon.png"));

  console.log("Generated og-default.png, favicons, and touch icons from the brand logo");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
