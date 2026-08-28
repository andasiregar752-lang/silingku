import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy index.html to public/index.html
const srcHtml = path.join(__dirname, 'index.html');
const destHtml = path.join(publicDir, 'index.html');
fs.copyFileSync(srcHtml, destHtml);

// Also copy to dist directory if needed
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}
fs.copyFileSync(srcHtml, path.join(distDir, 'index.html'));

console.log('✅ Build successfully created "public" and "dist" output directories.');
