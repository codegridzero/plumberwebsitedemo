const fs = require('fs');

const contentPath = 'C:\\Users\\office\\.gemini\\antigravity-ide\\brain\\3e2a35cc-cd8f-4e9e-bbf1-a54bc69d0e99\\.system_generated\\steps\\96\\content.md';

if (!fs.existsSync(contentPath)) {
    console.log("Content path does not exist!");
    process.exit(1);
}

const html = fs.readFileSync(contentPath, 'utf8');

// Find all wixstatic image URLs
const imgRegex = /https:\/\/static\.wixstatic\.com\/media\/[a-zA-Z0-9_~.\-\/]+/g;
const imgMatches = [...new Set(html.match(imgRegex) || [])];

console.log("=== FOUND CLIENT IMAGES ===");
imgMatches.forEach(img => console.log(img));

// Extract text content inside html tags
const cleanText = html.replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

console.log("\n=== FOUND CLIENT TEXT SNIPPETS ===");
const keywords = ['parson', 'plumb', 'drain', 'service', 'columbus', 'phone', 'call', 'contact', 'leak', 'water', 'sewer', 'emergency', 'license', 'price', 'quote', 'hour'];
const relevantLines = cleanText.filter(line => keywords.some(k => line.toLowerCase().includes(k)));

[...new Set(relevantLines)].slice(0, 100).forEach(line => console.log(line));
