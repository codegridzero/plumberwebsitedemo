const fs = require('fs');

const { sections_data } = require('./count_specs.js');

let txtLines = [];
let mdLines = [];

txtLines.push("==================================================");
txtLines.push("MASTER TEMPLATE CONTENT SPECIFICATION");
txtLines.push("==================================================");
txtLines.push("");
txtLines.push("Template: ProPlumbers Webflow Master Template");
txtLines.push("Source File: index.html");
txtLines.push("");
txtLines.push("--------------------------------------------------");
txtLines.push("");

mdLines.push("==================================================");
mdLines.push("MASTER TEMPLATE CONTENT SPECIFICATION");
mdLines.push("==================================================");
mdLines.push("");
mdLines.push("Template: ProPlumbers Webflow Master Template");
mdLines.push("Source File: index.html");
mdLines.push("");
mdLines.push("--------------------------------------------------");
mdLines.push("");

let grandTotalSections = sections_data.length;
let grandTotalElements = 0;
let grandTotalWords = 0;
let grandTotalCharsInc = 0;
let grandTotalCharsExc = 0;

let sectionSummaries = [];

sections_data.forEach((sec, secIdx) => {
    const secNum = String(secIdx + 1).padStart(2, '0');
    txtLines.push(`## SECTION ${secNum} — ${sec.name.replace(/^SECTION \d+ — /, '')}`);
    txtLines.push("");
    
    mdLines.push(`## SECTION ${secNum} — ${sec.name.replace(/^SECTION \d+ — /, '')}`);
    mdLines.push("");

    let secWords = 0;
    let secCharsInc = 0;
    let secCharsExc = 0;
    let secElements = sec.elements.length;

    sec.elements.forEach((el, elIdx) => {
        const elNum = String(elIdx + 1).padStart(2, '0');
        const text = el.text;
        const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
        const charsInc = text.length;
        const charsExc = text.replace(/\s/g, '').length;
        const explicitLines = text.split('\n').length;
        const lineStr = explicitLines === 1 ? "1 line" : `${explicitLines} lines`;
        const requirement = `Approximately ${words} words / ${charsInc} characters including spaces`;

        secWords += words;
        secCharsInc += charsInc;
        secCharsExc += charsExc;

        // TXT entry
        txtLines.push(`Element ${elNum}`);
        txtLines.push(`Type: ${el.type}`);
        txtLines.push(`Current Text: ${text}`);
        txtLines.push(`Words: ${words}`);
        txtLines.push(`Characters Including Spaces: ${charsInc}`);
        txtLines.push(`Characters Excluding Spaces: ${charsExc}`);
        txtLines.push(`Explicit Lines: ${lineStr}`);
        txtLines.push(`Requirement: ${requirement}`);
        txtLines.push("");

        // MD entry
        mdLines.push(`Element ${elNum}`);
        mdLines.push(`Type: ${el.type}`);
        mdLines.push(`Current Text: ${text}`);
        mdLines.push(`Words: ${words}`);
        mdLines.push(`Characters Including Spaces: ${charsInc}`);
        mdLines.push(`Characters Excluding Spaces: ${charsExc}`);
        mdLines.push(`Explicit Lines: ${lineStr}`);
        mdLines.push(`Requirement: ${requirement}`);
        mdLines.push("");
    });

    txtLines.push("--------------------------------------------------");
    txtLines.push("");

    mdLines.push("--------------------------------------------------");
    mdLines.push("");

    grandTotalElements += secElements;
    grandTotalWords += secWords;
    grandTotalCharsInc += secCharsInc;
    grandTotalCharsExc += secCharsExc;

    sectionSummaries.push({
        section: `SECTION ${secNum} — ${sec.name.replace(/^SECTION \d+ — /, '')}`,
        elements: secElements,
        words: secWords,
        charsInc: secCharsInc,
        charsExc: secCharsExc
    });
});

// Final Specification Summary TXT
txtLines.push("==================================================");
txtLines.push("FINAL SPECIFICATION SUMMARY");
txtLines.push("==================================================");
txtLines.push("");
txtLines.push(`Total Number of Sections: ${grandTotalSections}`);
txtLines.push(`Total Number of Text Elements: ${grandTotalElements}`);
txtLines.push(`Total Number of Words: ${grandTotalWords}`);
txtLines.push(`Total Number of Characters Including Spaces: ${grandTotalCharsInc}`);
txtLines.push(`Total Number of Characters Excluding Spaces: ${grandTotalCharsExc}`);
txtLines.push("");
txtLines.push("--------------------------------------------------");
txtLines.push("SECTION-BY-SECTION SUMMARY");
txtLines.push("--------------------------------------------------");
txtLines.push("");

sectionSummaries.forEach(s => {
    txtLines.push(`${s.section}`);
    txtLines.push(`  - Text Elements: ${s.elements}`);
    txtLines.push(`  - Total Words: ${s.words}`);
    txtLines.push(`  - Characters (Including Spaces): ${s.charsInc}`);
    txtLines.push(`  - Characters (Excluding Spaces): ${s.charsExc}`);
    txtLines.push("");
});

// Final Specification Summary MD
mdLines.push("## FINAL SPECIFICATION SUMMARY");
mdLines.push("");
mdLines.push(`- **Total Number of Sections**: ${grandTotalSections}`);
mdLines.push(`- **Total Number of Text Elements**: ${grandTotalElements}`);
mdLines.push(`- **Total Number of Words**: ${grandTotalWords}`);
mdLines.push(`- **Total Number of Characters Including Spaces**: ${grandTotalCharsInc}`);
mdLines.push(`- **Total Number of Characters Excluding Spaces**: ${grandTotalCharsExc}`);
mdLines.push("");
mdLines.push("### SECTION-BY-SECTION SUMMARY");
mdLines.push("");
mdLines.push("| Section | Elements | Words | Chars (Inc Spaces) | Chars (Exc Spaces) |");
mdLines.push("| ------- | -------- | ----- | ------------------ | ------------------ |");
sectionSummaries.forEach(s => {
    mdLines.push(`| ${s.section} | ${s.elements} | ${s.words} | ${s.charsInc} | ${s.charsExc} |`);
});

fs.writeFileSync("master-template-content-specification.txt", txtLines.join("\n"), "utf-8");
fs.writeFileSync("master_template_content_specification.md", mdLines.join("\n"), "utf-8");

console.log("Successfully generated master-template-content-specification.txt and master_template_content_specification.md!");
