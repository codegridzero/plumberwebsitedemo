const fs = require('fs');

const origPath = 'c:\\Users\\office\\Desktop\\Plumber master\\Plumber master\\index.html';
const targetPath = 'c:\\Users\\office\\Desktop\\Plumber master\\Plumber master\\parson-plumbing\\index.html';

const origHtml = fs.readFileSync(origPath, 'utf8');
let targetHtml = fs.readFileSync(targetPath, 'utf8');

// Extract section-brand block from original index.html
const origBrandRegex = /<div class="section-brand">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i;
const origBrandMatch = origHtml.match(origBrandRegex);

if (!origBrandMatch) {
    console.error("Could not find section-brand block in original index.html!");
    process.exit(1);
}

const origBrandBlock = origBrandMatch[0];

// Replace section-brand block in targetHtml with origBrandBlock
const targetBrandRegex = /<div class="section-brand">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i;

targetHtml = targetHtml.replace(targetBrandRegex, origBrandBlock);

fs.writeFileSync(targetPath, targetHtml, 'utf8');
console.log("Successfully restored section-brand logos to original template icons!");
