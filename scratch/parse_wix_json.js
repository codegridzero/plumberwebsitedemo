const fs = require('fs');

const contentPath = 'C:\\Users\\office\\.gemini\\antigravity-ide\\brain\\3e2a35cc-cd8f-4e9e-bbf1-a54bc69d0e99\\.system_generated\\steps\\96\\content.md';
const html = fs.readFileSync(contentPath, 'utf8');

// Search for Wix image media URLs
const mediaMatches = html.match(/f38100_[a-f0-9]+|1fac68_[a-f0-9]+|[a-f0-9]{6}_[a-f0-9]{32}~mv2/gi) || [];
console.log("=== WIX MEDIA IDS ===");
console.log([...new Set(mediaMatches)]);

// Search for phone numbers, email, addresses in the entire html text
const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
console.log("\n=== PHONE NUMBERS ===");
console.log([...new Set(html.match(phoneRegex) || [])]);

// Search for text data in JSON blobs
const jsonMatches = html.match(/\{"text":[\s\S]*?\}/g) || [];
console.log("\n=== TEXT JSON BLOBS ===");
jsonMatches.forEach(m => console.log(m.substring(0, 150)));
