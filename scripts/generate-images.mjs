/**
 * One-off generator for raster brand assets (OG image, touch icons) built
 * from inline SVG using sharp. Not wired into the build — social platforms
 * and iOS need real raster files, so these are generated once and committed
 * to public/. Re-run manually with `node scripts/generate-images.mjs` if the
 * brand mark changes.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

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

  <!-- logo mark -->
  <g transform="translate(96 92)">
    <ellipse cx="24" cy="24" rx="26" ry="15" transform="rotate(-24 24 24)" fill="none" stroke="#32D583" stroke-width="4"/>
    <circle cx="24" cy="24" r="11" fill="#32D583"/>
    <circle cx="24" cy="24" r="4.2" fill="#050816"/>
    <circle cx="45" cy="12" r="5" fill="#32D583"/>
  </g>
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

  await sharp(Buffer.from(ogSvg)).png().toFile(path.join(publicDir, "images", "og-default.png"));

  const faviconSvgPath = path.join(publicDir, "favicon.svg");
  await sharp(faviconSvgPath).resize(180, 180).png().toFile(path.join(publicDir, "icons", "apple-touch-icon.png"));
  await sharp(faviconSvgPath).resize(192, 192).png().toFile(path.join(publicDir, "icons", "icon-192.png"));
  await sharp(faviconSvgPath).resize(512, 512).png().toFile(path.join(publicDir, "icons", "icon-512.png"));
  await sharp(faviconSvgPath).resize(32, 32).png().toFile(path.join(publicDir, "icons", "favicon-32.png"));

  console.log("Generated og-default.png and icon set in public/images and public/icons");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
