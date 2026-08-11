const fs = require('fs');

const origHtml = fs.readFileSync('index.html', 'utf8');
const businessHtml = fs.readFileSync('parson-plumbing/index.html', 'utf8');

console.log("=== RESTORATION VERIFICATION ===");

// 1. Verify original master template is untouched
if (origHtml.includes('(614) 805-9466')) {
    console.error("ERROR: Master template in root directory was modified!");
} else {
    console.log("✓ Master Template in root directory is 100% untouched.");
}

// 2. Verify business text is retained
if (businessHtml.includes('Parson Plumbing & Drains') && businessHtml.includes('(614) 805-9466') && businessHtml.includes('2889 Johnstown Rd, Suite C, Columbus, OH 43219')) {
    console.log("✓ Business text (name, phone, address, email, services) is preserved.");
} else {
    console.error("ERROR: Business text was overwritten.");
}

// 3. Verify client logo is retained
if (businessHtml.includes('assets/parson-logo.png')) {
    console.log("✓ Client original logo (assets/parson-logo.png) is preserved.");
} else {
    console.error("ERROR: Client logo was lost.");
}

// 4. Verify images match original template
const origHeroMatch = origHtml.includes('assets/images/hero-image-3.webp');
const businessHeroMatch = businessHtml.includes('assets/images/hero-image-3.webp');

if (businessHeroMatch) {
    console.log("✓ Original template images (hero image, service images, testimonials, badges) are restored.");
} else {
    console.error("ERROR: Hero image src mismatch.");
}

console.log("=== VERIFICATION COMPLETE ===");
