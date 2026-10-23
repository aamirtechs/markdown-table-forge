# Markdown Table Forge
Live page: https://aamirtechs.github.io/markdown-table-forge/

Paste spreadsheet cells and get a perfectly aligned Markdown, HTML or CSV table, with pipe and newline escaping that does not break on your data. Bidirectional conversion included. It runs entirely in the browser so files and text you paste stay on your device. Built for busy operators who need a correct answer and a downloadable file, not another account.

## Features
- Paste TSV or CSV from Excel or Sheets, or upload-style paste of a Markdown table
- Column alignment controls and header toggle
- Correct escaping for pipes and newlines inside cells
- Outputs Markdown, HTML table and CSV, bidirectional
- Live rendered HTML preview of your table

## How it works
Add your input in the tool card, choose the options, and run the tool. Processing happens locally in src/logic.js and the page wiring. You can review the results on screen and download the output file.

## Privacy
Runs 100% in your browser. Your files never leave this device, nothing is uploaded,
and there is no tracking.

## Development
Core logic lives in `src/logic.js` and is shared by the page and the tests.
Run the tests with `npm test`.

## License
MIT, Copyright 2026 Amir Hussain.
