const fs = require('fs');
const path = require('path');
const https = require('https');

const assetsDir = 'c:\\Users\\office\\Desktop\\Plumber master\\Plumber master\\parson-plumbing\\assets';

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

function downloadFile(url, destPath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destPath);
        https.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    console.log(`Downloaded ${url} to ${destPath}`);
                    resolve();
                });
            });
        }).on('error', (err) => {
            fs.unlink(destPath, () => {});
            reject(err);
        });
    });
}

async function downloadAssets() {
    try {
        const logoUrl = 'https://static.wixstatic.com/media/f38100_23a6621e2d554f6daa8beef50ea72a43~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01/f38100_23a6621e2d554f6daa8beef50ea72a43~mv2.png';
        const heroUrl = 'https://static.wixstatic.com/media/1fac68_e0d813029f1a4705b2bd4f4a436f078f~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/1fac68_e0d813029f1a4705b2bd4f4a436f078f~mv2.jpg';

        await downloadFile(logoUrl, path.join(assetsDir, 'parson-logo.png'));
        await downloadFile(heroUrl, path.join(assetsDir, 'parson-hero.jpg'));
        console.log("All client assets downloaded successfully!");
    } catch (e) {
        console.error("Error downloading assets:", e);
    }
}

downloadAssets();
