import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LIVE_DIR = path.join(__dirname, '../public/wallpapers/live');

function checkFFmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function generateThumbnails() {
  if (!fs.existsSync(LIVE_DIR)) {
    console.log(`[Live Wallpapers] Directory not found: ${LIVE_DIR}`);
    return;
  }

  const files = fs.readdirSync(LIVE_DIR);
  const mp4Files = files.filter(file => file.endsWith('.mp4'));

  if (mp4Files.length === 0) {
    console.log('[Live Wallpapers] No MP4 videos found.');
    return;
  }

  let hasFFmpeg = null;

  for (const mp4File of mp4Files) {
    const baseName = path.basename(mp4File, '.mp4');
    const jpgName = `${baseName}.jpg`;
    const jpgPath = path.join(LIVE_DIR, jpgName);
    const mp4Path = path.join(LIVE_DIR, mp4File);

    if (!fs.existsSync(jpgPath)) {
      if (hasFFmpeg === null) {
        hasFFmpeg = checkFFmpeg();
      }

      if (!hasFFmpeg) {
        console.warn(`\x1b[33m[Live Wallpapers] Warning: ffmpeg is not installed or not in PATH. Cannot generate preview for ${mp4File}.\x1b[0m`);
        continue;
      }

      console.log(`[Live Wallpapers] Generating preview for ${mp4File}...`);
      try {
        execSync(
          `ffmpeg -y -ss 2 -i "${mp4Path}" -vframes 1 -q:v 3 "${jpgPath}"`,
          { stdio: 'inherit' }
        );
        console.log(`[Live Wallpapers] Created thumbnail: ${jpgName}`);
      } catch (err) {
        console.error(`[Live Wallpapers] Failed to generate thumbnail for ${mp4File}:`, err);
      }
    }
  }
}

generateThumbnails();
