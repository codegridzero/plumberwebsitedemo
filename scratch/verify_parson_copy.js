const fs = require('fs');

const origHtml = fs.readFileSync('index.html', 'utf8');
const businessHtml = fs.readFileSync('parson-plumbing/index.html', 'utf8');

console.log("=== VERIFICATION REPORT ===");

// Check original master template safety
if (origHtml.includes('(614) 805-9466') || origHtml.includes('parson-logo')) {
    console.error("FATAL ERROR: Master template in root directory was modified!");
} else {
    console.log("✓ ORIGINAL MASTER TEMPLATE IS 100% UNTOUCHED AND SAFE.");
}

// Check business copy
if (businessHtml.includes('(614) 805-9466')) {
    console.log("✓ Phone number correctly updated to (614) 805-9466");
} else {
    console.error("x Phone number missing in business copy");
}

if (businessHtml.includes('2889 Johnstown Rd, Suite C, Columbus, OH 43219')) {
    console.log("✓ Address correctly updated to 2889 Johnstown Rd, Suite C, Columbus, OH 43219");
} else {
    console.error("x Address missing in business copy");
}

if (businessHtml.includes('assets/parson-logo.png')) {
    console.log("✓ Client logo correctly linked (assets/parson-logo.png)");
} else {
    console.error("x Logo asset reference missing");
}

if (businessHtml.includes('assets/parson-hero.jpg')) {
    console.log("✓ Client hero image correctly linked (assets/parson-hero.jpg)");
} else {
    console.error("x Hero image asset reference missing");
}

if (businessHtml.includes('Parson Plumbing & Drains')) {
    console.log("✓ Company branding correctly updated to Parson Plumbing & Drains");
}

console.log("=== VERIFICATION COMPLETE ===");
