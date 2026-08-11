const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\office\\Desktop\\Plumber master\\Plumber master';
const destDir = path.join(srcDir, 'parson-plumbing');

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((childItemName) => {
            // Do not copy scratch folder or existing business folders into the new business folder
            if (childItemName === 'scratch' || childItemName === 'parson-plumbing' || childItemName === '.git') {
                return;
            }
            copyRecursiveSync(
                path.join(src, childItemName),
                path.join(dest, childItemName)
            );
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

console.log("Copying Master Template into parson-plumbing folder...");
copyRecursiveSync(srcDir, destDir);
console.log("Master Template copied successfully!");
