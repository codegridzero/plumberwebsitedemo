const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Let's search for all major sections in index.html
// Let's print out lines of index.html that contain section tags or key section markers.

const lines = html.split('\n');
lines.forEach((line, idx) => {
    if (line.includes('<section') || line.includes('class="section') || line.includes('<!--') && line.toLowerCase().includes('section')) {
        console.log(`Line ${idx + 1}: ${line.trim()}`);
    }
});
