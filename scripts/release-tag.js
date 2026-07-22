import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Read package.json version
const pkgPath = path.join(rootDir, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const version = pkg.version;

if (!version) {
  console.error('❌ Error: No version found in package.json');
  process.exit(1);
}

const tagName = `v${version}`;

console.log(`🚀 Starting tag creation process for ${tagName}...`);

try {
  // 2. Check if git status has unstaged changes
  console.log('🔍 Checking git status...');
  const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
  if (status) {
    console.log('⚠️  Warning: You have uncommitted changes in your working directory. Committing them first is recommended.');
  }

  // 3. Check if local git tag already exists
  const localTags = execSync('git tag -l', { encoding: 'utf8' });
  const tagList = localTags.split('\n').map(t => t.trim());
  if (tagList.includes(tagName)) {
    console.error(`❌ Error: Tag ${tagName} already exists locally.`);
    process.exit(1);
  }

  // 4. Build library
  console.log('📦 Compiling library bundle (pnpm build:lib)...');
  execSync('pnpm build:lib', { stdio: 'inherit', cwd: rootDir });

  // 5. Create git tag
  console.log(`🏷️  Creating local tag: ${tagName}...`);
  execSync(`git tag -a ${tagName} -m "Release ${tagName}"`, { stdio: 'inherit', cwd: rootDir });

  // 6. Push tag
  console.log(`📤 Pushing tag ${tagName} to GitHub (origin)...`);
  execSync(`git push origin ${tagName}`, { stdio: 'inherit', cwd: rootDir });

  console.log(`✨ Done! Successfully built, tagged, and pushed ${tagName} to GitHub.`);
} catch (error) {
  console.error('❌ Tag process failed:', error.message);
  process.exit(1);
}
