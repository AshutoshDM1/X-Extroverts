#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { removeBackground } from '@imgly/background-removal-node';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const VALID_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp']);

function resolvePath(targetPath) {
  if (path.isAbsolute(targetPath)) return targetPath;
  return path.resolve(projectRoot, targetPath);
}

/**
 * Process a single image file and output a transparent PNG
 */
async function processSingleImage(inputPath, outputPath) {
  const resolvedInput = resolvePath(inputPath);
  const resolvedOutput = resolvePath(outputPath);

  console.log(`\n⏳ Processing: ${path.basename(resolvedInput)} ...`);
  const startTime = Date.now();

  try {
    const ext = path.extname(resolvedInput).toLowerCase();
    const mimeType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';

    const fileBuffer = await fs.readFile(resolvedInput);
    const blob = new Blob([fileBuffer], { type: mimeType });

    const resultBlob = await removeBackground(blob, {
      progress: (key, current, total) => {
        const percent = total > 0 ? Math.round((current / total) * 100) : 0;
        process.stdout.write(`\r  → [${key}] ${percent}%`);
      },
    });

    const outputBuffer = Buffer.from(await resultBlob.arrayBuffer());

    await fs.mkdir(path.dirname(resolvedOutput), { recursive: true });
    await fs.writeFile(resolvedOutput, outputBuffer);

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\r  ✅ Saved in ${elapsed}s -> ${resolvedOutput}`);
  } catch (error) {
    console.error(`\r  ❌ Failed to process ${inputPath}:`, error.message);
  }
}

/**
 * Batch process all images in a folder
 */
async function processDirectory(inputDir, outputDir) {
  const resolvedInputDir = resolvePath(inputDir);
  const resolvedOutputDir = resolvePath(outputDir);

  const entries = await fs.readdir(resolvedInputDir, { withFileTypes: true });
  const imageFiles = entries
    .filter((e) => e.isFile() && VALID_EXTENSIONS.has(path.extname(e.name).toLowerCase()))
    .map((e) => e.name);

  if (imageFiles.length === 0) {
    console.log(`⚠️ No valid images found in ${inputDir}`);
    return;
  }

  console.log(`🚀 Found ${imageFiles.length} images to process in ${resolvedInputDir}`);

  for (let i = 0; i < imageFiles.length; i++) {
    const file = imageFiles[i];
    const inFile = path.join(resolvedInputDir, file);
    const baseName = path.parse(file).name;
    const outFile = path.join(resolvedOutputDir, `${baseName}-nobg.png`);

    console.log(`\n[${i + 1}/${imageFiles.length}] ${file}`);
    await processSingleImage(inFile, outFile);
  }

  console.log(`\n✨ All done! Transparent PNGs saved to: ${resolvedOutputDir}`);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`
📸 Extroverts - Local Node.js Background Removal Tool
------------------------------------------------------
Usage:
  1. Single file:
     node scripts/remove-bg.mjs <input-file> [output-file]

     Example:
     node scripts/remove-bg.mjs public/backgrouds/image1.png public/backgrouds/image1-nobg.png

  2. Batch directory:
     node scripts/remove-bg.mjs <input-folder> [output-folder]

     Example:
     node scripts/remove-bg.mjs public/backgrouds public/backgrouds-nobg
    `);
    return;
  }

  const inputTarget = resolvePath(args[0]);
  const stat = await fs.stat(inputTarget);

  if (stat.isDirectory()) {
    const outputTarget = args[1] ? resolvePath(args[1]) : `${inputTarget}-nobg`;
    await processDirectory(inputTarget, outputTarget);
  } else {
    const defaultOutput = path.join(
      path.dirname(inputTarget),
      `${path.parse(inputTarget).name}-nobg.png`,
    );
    const outputTarget = args[1] ? resolvePath(args[1]) : defaultOutput;
    await processSingleImage(inputTarget, outputTarget);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
