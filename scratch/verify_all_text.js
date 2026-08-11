const fs = require('fs');

// Import the existing sections data from count_specs.js
const countSpecs = require('./count_specs.js');

console.log("Validating elements in all sections...");

let grandTotalSections = countSpecs.sections_data.length;
let grandTotalElements = 0;
let grandTotalWords = 0;
let grandTotalCharsInc = 0;
let grandTotalCharsExc = 0;

countSpecs.sections_data.forEach((sec, sIdx) => {
    let secWords = 0;
    let secCharsInc = 0;
    let secCharsExc = 0;
    let secElements = sec.elements.length;
    
    sec.elements.forEach((el, eIdx) => {
        const text = el.text;
        const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
        const charsInc = text.length;
        const charsExc = text.replace(/\s/g, '').length;
        const linesCount = text.split('\n').length;
        
        el.calcWords = words;
        el.calcCharsInc = charsInc;
        el.calcCharsExc = charsExc;
        el.calcLines = linesCount;
        
        secWords += words;
        secCharsInc += charsInc;
        secCharsExc += charsExc;
    });

    sec.totalWords = secWords;
    sec.totalCharsInc = secCharsInc;
    sec.totalCharsExc = secCharsExc;
    sec.totalElements = secElements;

    grandTotalElements += secElements;
    grandTotalWords += secWords;
    grandTotalCharsInc += secCharsInc;
    grandTotalCharsExc += secCharsExc;

    console.log(`Section ${sIdx+1}: ${sec.name} | Elements: ${secElements} | Words: ${secWords} | Chars(inc): ${secCharsInc} | Chars(exc): ${secCharsExc}`);
});

console.log("\n==================================================");
console.log(`GRAND TOTALS:`);
console.log(`Total Sections: ${grandTotalSections}`);
console.log(`Total Elements: ${grandTotalElements}`);
console.log(`Total Words: ${grandTotalWords}`);
console.log(`Total Characters (Inc Spaces): ${grandTotalCharsInc}`);
console.log(`Total Characters (Exc Spaces): ${grandTotalCharsExc}`);
console.log("==================================================");
