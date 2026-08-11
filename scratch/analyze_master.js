const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Simple script to print sections identified in index.html
const sectionRegex = /<(section|header|footer|div)[^>]*?(class|id)=["']([^"']*)["'][^>]*>/g;
let match;
console.log("Analyzing structure of index.html...");

// Let's search for top-level layout sections or comments in index.html
const sectionComments = html.match(/<!--[\s\S]*?-->/g) || [];
sectionComments.forEach(comment => {
    if (comment.includes("SECTION") || comment.includes("Banner") || comment.includes("Hero") || comment.includes("Nav") || comment.includes("Footer")) {
        console.log("COMMENT:", comment.trim());
    }
});
