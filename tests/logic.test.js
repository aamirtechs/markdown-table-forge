const test=require("node:test");const assert=require("node:assert/strict");const L=require("../src/logic.js");
test("TSV parse auto-detects tabs",()=>{const r=L.parseDelimited("a\tb\n1\t2");assert.deepEqual(r,[["a","b"],["1","2"]]);});
test("CSV parse handles quoted pipes content",()=>{const r=L.parseDelimited('a,b\n"x|y",2');assert.equal(r[1][0],"x|y");});
test("markdown generation escapes pipes and pads",()=>{const md=L.toMarkdown([["Name","Val"],["a|b","1"]]);assert.match(md,/a\\\|b/);const lines=md.trim().split("\n");assert.equal(lines.length,3);assert.match(lines[1],/---/);});
test("alignment rows for center and right",()=>{const md=L.toMarkdown([["A","B"],["1","2"]],{aligns:["center","right"]});const sep=md.trim().split("\n")[1];assert.match(sep,/:/);});
test("reverse markdown to CSV round trip",()=>{const rows=[["Name","Val"],["Alpha","1"],["Beta","2"]];const md=L.toMarkdown(rows);const back=L.markdownToRows(md);assert.deepEqual(back,rows);const csv=L.toCsv(back);assert.match(csv,/Alpha,1/);});
test("HTML table generation escapes",()=>{const h=L.toHtml([["H"],["a<b"]]);assert.match(h,/<table/);assert.match(h,/a&lt;b/);assert.match(h,/<th>H<\/th>/);});
test("multi-line cell becomes br in markdown",()=>{assert.equal(L.escapeMdCell("a\nb"),"a<br>b");assert.equal(L.unescapeMdCell("a<br>b"),"a\nb");});
