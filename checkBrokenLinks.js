const fs = require('fs');
const path = require('path');

// Root folder to scan — adjust if needed
const rootDir = path.resolve('./');

// Regex to find markdown links: [text](link)
const mdLinkRegex = /\[([^\]]+)]\(([^)]+)\)/g;

// Helper: check if a path is external (http, mailto, etc)
function isExternalLink(link) {
  return /^(https?:|mailto:|tel:)/.test(link);
}

// Helper: Normalize link path
function normalizeLink(link) {
  // Remove hash or query params (e.g. /docs/intro#section -> /docs/intro)
  return link.split('#')[0].split('?')[0];
}

// Recursively find all .md files under a directory
function findMarkdownFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    // Skip node_modules folder
    if (file === 'node_modules') continue;

    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(findMarkdownFiles(fullPath));
    } else if (file.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}


// Check if target file exists (add .md if missing)
function targetExists(rootDir, currentFile, link) {
  // Ignore external links
  if (isExternalLink(link)) return true;

  let normalized = normalizeLink(link);

  // If link starts with /, resolve relative to rootDir
  let targetPath;
  if (normalized.startsWith('/')) {
    targetPath = path.join(rootDir, normalized);
  } else {
    // Otherwise resolve relative to current file's directory
    targetPath = path.join(path.dirname(currentFile), normalized);
  }

  // Check if file exists directly or with .md added
  if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
    return true;
  }
  if (fs.existsSync(targetPath + '.md') && fs.statSync(targetPath + '.md').isFile()) {
    return true;
  }
  // Also check if it's a directory with README.md or index.md inside
  if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
    if (fs.existsSync(path.join(targetPath, 'README.md')) || fs.existsSync(path.join(targetPath, 'index.md'))) {
      return true;
    }
  }
  return false;
}

async function main() {
  const mdFiles = findMarkdownFiles(rootDir);
  console.log(`Scanning ${mdFiles.length} markdown files for broken links...\n`);

  let brokenLinksFound = 0;

  for (const file of mdFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = mdLinkRegex.exec(content)) !== null) {
      const linkText = match[1];
      const linkUrl = match[2];

      if (!targetExists(rootDir, file, linkUrl)) {
        brokenLinksFound++;
        console.log(`Broken link found in ${file}:`);
        console.log(`  Text: "${linkText}"`);
        console.log(`  Link: ${linkUrl}\n`);
      }
    }
  }

  if (brokenLinksFound === 0) {
    console.log('No broken links found! 🎉');
  } else {
    console.log(`Total broken links found: ${brokenLinksFound}`);
  }
}

main().catch(err => {
  console.error('Error running script:', err);
});
