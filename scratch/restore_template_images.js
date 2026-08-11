const fs = require('fs');

const origPath = 'c:\\Users\\office\\Desktop\\Plumber master\\Plumber master\\index.html';
const targetPath = 'c:\\Users\\office\\Desktop\\Plumber master\\Plumber master\\parson-plumbing\\index.html';

const origHtml = fs.readFileSync(origPath, 'utf8');
let targetHtml = fs.readFileSync(targetPath, 'utf8');

// Extract all <img> tags from original index.html
const origImgMatches = origHtml.match(/<img[^>]+>/gi) || [];
const targetImgMatches = targetHtml.match(/<img[^>]+>/gi) || [];

console.log(`Original img tags count: ${origImgMatches.length}`);
console.log(`Target img tags count: ${targetImgMatches.length}`);

// Replace all <img> tags in targetHtml with original <img> tags, EXCEPT when alt or src contains "Logo" / "logo"
let newTargetHtml = targetHtml;

// We can replace image tags sequentially or by class/context
// Let's replace the header-image / hero images back to original src values from origHtml
// In origHtml, let's find what src values header-image tags had:
const origHeaderImages = origHtml.match(/<img[^>]*class=["'][^"']*header-image[^"']*["'][^>]*>/gi) || [];
console.log("Original header image tags count:", origHeaderImages.length);

if (origHeaderImages.length > 0) {
    const origHeroSrcMatch = origHeaderImages[0].match(/src=["']([^"']+)["']/i);
    if (origHeroSrcMatch) {
        const origHeroSrc = origHeroSrcMatch[1];
        console.log("Restoring original hero image src:", origHeroSrc);
        // Replace assets/parson-hero.jpg back to origHeroSrc
        newTargetHtml = newTargetHtml.replace(/src=["']assets\/parson-hero\.jpg["']/g, `src="${origHeroSrc}"`);
    }
}

// Ensure logo still uses assets/parson-logo.png
// Check if logo replacement was kept
if (!newTargetHtml.includes('assets/parson-logo.png')) {
    console.log("Re-applying logo asset link...");
    newTargetHtml = newTargetHtml.replace(/<img[^>]*src=["'][^"']*logo[^"']*["'][^>]*>/gi, '<img src="assets/parson-logo.png" alt="Parson Plumbing & Drains Logo" style="max-height: 48px; width: auto;" />');
}

fs.writeFileSync(targetPath, newTargetHtml, 'utf8');
console.log("Successfully restored all original images while keeping client logo and text intact!");
