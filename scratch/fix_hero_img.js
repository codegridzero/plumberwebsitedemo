const fs = require('fs');

const filePath = 'c:\\Users\\office\\Desktop\\Plumber master\\Plumber master\\parson-plumbing\\index.html';
let html = fs.readFileSync(filePath, 'utf8');

// Find all img tags in index.html
const imgRegex = /<img[^>]+>/gi;
const matches = html.match(imgRegex) || [];

console.log(`Found ${matches.length} img tags in parson-plumbing/index.html:`);
matches.forEach((img, i) => console.log(`${i+1}: ${img}`));

// Replace hero card / main section hero images with assets/parson-hero.jpg
html = html.replace(/src=["'][^"']*(Hero|hero|Header)[^"']*["']/gi, 'src="assets/parson-hero.jpg"');
html = html.replace(/src=["']https:\/\/assets\.website-files\.com\/[^"']*["']/gi, 'src="assets/parson-hero.jpg"');

fs.writeFileSync(filePath, html, 'utf8');
console.log("Updated hero image tags!");
