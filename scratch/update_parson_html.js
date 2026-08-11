const fs = require('fs');

const targetFile = 'c:\\Users\\office\\Desktop\\Plumber master\\Plumber master\\parson-plumbing\\index.html';
let html = fs.readFileSync(targetFile, 'utf8');

// 1. Phone number replacements
html = html.replace(/\+9 \(245\) 326-02-22/g, '(614) 805-9466');
html = html.replace(/tel:\+92453260222/g, 'tel:6148059466');

// 2. Email replacements
html = html.replace(/hello@example\.com/g, 'info@parson-plumbing.com');
html = html.replace(/mailto:hello@example\.com/g, 'mailto:info@parson-plumbing.com');

// 3. Address replacements
html = html.replace(/Macomb, Chicago HQ Estica Cop\./g, '2889 Johnstown Rd, Suite C, Columbus, OH 43219');

// 4. Logo replacements
// Update navigation logo image/text to Parson Plumbing & Drains logo
html = html.replace(/<img[^>]*src=["'][^"']*logo[^"']*["'][^>]*>/gi, '<img src="assets/parson-logo.png" alt="Parson Plumbing & Drains Logo" style="max-height: 48px; width: auto;" />');

// 5. Update hero image
html = html.replace(/src=["']images\/Hero-Image\.jpg["']/gi, 'src="assets/parson-hero.jpg"');
html = html.replace(/src=["']https:\/\/assets\.website-files\.com\/[^"']*["']/gi, 'src="assets/parson-hero.jpg"');

// 6. Title and meta tags replacement
html = html.replace(/<title>.*<\/title>/gi, '<title>Parson Plumbing & Drains | Trusted Columbus Plumbers</title>');

// 7. Text replacements for Company Name & Branding
html = html.replace(/Your Company Name/g, 'Parson Plumbing & Drains');
html = html.replace(/Your Company/g, 'Parson Plumbing & Drains');
html = html.replace(/ProPlumbers/g, 'Parson Plumbing & Drains');
html = html.replace(/WebOcean/g, 'Parson Plumbing & Drains Team');

// 8. About section paragraph update
const oldAbout = "We pride ourselves on being your trusted local plumbing experts. With 20 years of experience serving your city/region, our mission is to provide high-quality, reliable plumbing services that you can depend on, whether it's for your home or business. From fixing leaks to full plumbing system installations, we handle every job with the utmost professionalism and care.";
const newAbout = "At Parson Plumbing & Drains, we pride ourselves on being Columbus's trusted local plumbing experts. Founded in 2019 by Dustin Parson, our mission is to deliver high-quality, non-commissioned plumbing services with transparent pricing and zero sales pressure. From emergency leak repairs to trenchless sewer restoration, we handle every job with integrity, care, and master craftsmanship.";

html = html.replace(oldAbout, newAbout);

// 9. Columbus Address in map pins
html = html.replace(/450 E Town St, Columbus, OH 43215/g, '2889 Johnstown Rd, Suite C, Columbus, OH 43219');

fs.writeFileSync(targetFile, html, 'utf8');

console.log("Successfully updated parson-plumbing/index.html!");
