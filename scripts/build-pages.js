#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const distClientPath = path.join(__dirname, '..', 'dist', 'client');
const publicPath = path.join(__dirname, '..', 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

// Copy dist/client contents to public
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const files = fs.readdirSync(src);
  
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

copyDir(distClientPath, publicPath);

// Create .nojekyll file
fs.writeFileSync(path.join(publicPath, '.nojekyll'), '');

// Find the main entry point JS file
const assetsDir = path.join(publicPath, 'assets');
const files = fs.readdirSync(assetsDir);
const mainJsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js') && f !== 'index.js');

if (mainJsFile) {
  // Create index.html with the correct script reference
  const indexHtml = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Extingue Extintores - Hub</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/extingue-extintores-hub/assets/${mainJsFile}"></script>
  </body>
</html>`;
  
  fs.writeFileSync(path.join(publicPath, 'index.html'), indexHtml);
  console.log(`✓ Created index.html with script: ${mainJsFile}`);
} else {
  console.warn('⚠ Could not find main JS file');
}

console.log('✓ Copied dist/client to public');
console.log('✓ Created .nojekyll file');
