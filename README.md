# Token Optimization with MarkitDown

This project provides a simple tool to optimize content for LLM (Large Language Model) contexts by converting complex document formats into clean, token-efficient Markdown.

## Features

- **Multi-format Support**: Converts Word (.docx), PDF, Excel (.xlsx), and PowerPoint (.pptx) files to Markdown using `markitdown-js`.
- **Token Estimation**: Provides a rough approximation of the token count for the optimized content (based on ~4 characters per token).
- **LLM-Ready Output**: Saves the cleaned content to `optimized_payload.md`, ready to be used in your LLM prompts.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Clone this repository or download the files.
2. Install the required dependencies:

```bash
npm install
```

## Usage

1. Open `optimize.js` and update the file path in the last line:

```javascript
optimizeTokens('your-document.pdf');
```

2. Run the script:

```bash
node optimize.js
```

3. The script will output a summary to the console and generate `optimized_payload.md` in the project root.

## Dependencies

- [markitdown-js](https://www.npmjs.com/package/markitdown-js): A JavaScript port of Microsoft's MarkItDown for converting various document formats to Markdown.
