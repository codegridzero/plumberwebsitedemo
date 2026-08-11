const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Strip out SVG code tag internals, script tags, style tags so we only look at visible rendered text
let cleanHtml = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');

// Split by comments or key section markers
const sections = [
    { id: 1, name: "SECTION 01 — STICKY EMERGENCY BANNER", start: '<!-- Sticky Emergency Banner -->', end: '<div class="navbar' },
    { id: 2, name: "SECTION 02 — NAVIGATION BAR", start: '<div class="navbar', end: '<div class="section-header hero">' },
    { id: 3, name: "SECTION 03 — HERO", start: '<div class="section-header hero">', end: '<div data-w-id="52dd1769-6824-b91b-ef72-e62d5fb20b9c" class="section-about">' },
    { id: 4, name: "SECTION 04 — ABOUT US", start: '<div data-w-id="52dd1769-6824-b91b-ef72-e62d5fb20b9c" class="section-about">', end: '<div class="section-brand">' },
    { id: 5, name: "SECTION 05 — STATS COUNTER", start: '<div id="section-stats-counter"', end: '<!-- Trust Badges Section' },
    { id: 6, name: "SECTION 06 — TRUST BADGES & LICENSES", start: '<!-- Trust Badges Section', end: '<div class="section-service">' },
    { id: 7, name: "SECTION 07 — SERVICES", start: '<div class="section-service">', end: '<div class="section-process">' },
    { id: 8, name: "SECTION 08 — PROCESS (HOW IT WORKS)", start: '<div class="section-process">', end: '<div class="section-cta' },
    { id: 9, name: "SECTION 09 — CALL TO ACTION (MID-PAGE CTA)", start: '<div class="section-cta', end: '<div class="section-testimonial">' },
    { id: 10, name: "SECTION 10 — TESTIMONIALS", start: '<div class="section-testimonial">', end: '<!-- Before/After Photos Section -->' },
    { id: 11, name: "SECTION 11 — BEFORE & AFTER TRANSFORMATION GRID", start: '<!-- Before/After Photos Section -->', end: '<div class="section-packege">' },
    { id: 12, name: "SECTION 12 — PRICING & PACKAGES", start: '<div class="section-packege">', end: '<!-- Same-Day Service Map Section -->' },
    { id: 13, name: "SECTION 13 — SAME-DAY SERVICE MAP", start: '<!-- Same-Day Service Map Section -->', end: '<!-- FAQ Section' },
    { id: 14, name: "SECTION 14 — FREQUENTLY ASKED QUESTIONS (FAQ)", start: '<!-- FAQ Section', end: '<div class="section-footer">' },
    { id: 15, name: "SECTION 15 — FOOTER", start: '<div class="section-footer">', end: '</html>' }
];

sections.forEach(sec => {
    const p1 = cleanHtml.indexOf(sec.start);
    if (p1 === -1) {
        console.log(`ERROR: Start tag not found for ${sec.name}: ${sec.start}`);
        return;
    }
    let p2 = cleanHtml.indexOf(sec.end, p1 + sec.start.length);
    if (p2 === -1) {
        p2 = cleanHtml.length;
    }
    const secChunk = cleanHtml.substring(p1, p2);
    
    // Extract text nodes inside tags
    const textMatches = secChunk.match(/>([^<]+)</g) || [];
    const cleanedTexts = textMatches
        .map(m => m.replace(/^>|<$/g, '').trim())
        .filter(t => t.length > 0 && !t.startsWith('<!--') && !t.includes('Webflow') && !t.includes('function('));

    console.log(`=== ${sec.name} === (${cleanedTexts.length} raw text nodes found)`);
});
