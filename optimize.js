import Markitdown from 'markitdown-js';
import fs from 'fs';

const converter = new Markitdown();

async function optimizeTokens(filePath) {
    try {
        console.log(`Processing: ${filePath}...`);
        
        // 1. Convert complex file structure to clean markdown
        const result = await converter.convert(filePath);
        const optimizedText = result.textContent;

        // 2. Estimate token reduction (Rough approximation: 1 token ≈ 4 characters)
        const originalSizeBytes = fs.statSync(filePath).size;
        const optimizedTokensEst = Math.ceil(optimizedText.length / 4);

        console.log("\n--- Token Optimization Summary ---");
        console.log(`Original File Size: ${(originalSizeBytes / 1024).toFixed(2)} KB`);
        console.log(`Estimated Optimized Tokens: ${optimizedTokensEst}`);
        console.log("----------------------------------\n");

        // 3. Save optimized text for your LLM context payload
        fs.writeFileSync('optimized_payload.md', optimizedText);
        console.log("Saved optimized payload to 'optimized_payload.md'");

    } catch (error) {
        console.error("Optimization failed:", error);
    }
}

// Replace with your Word, PDF, Excel, or PowerPoint file path
optimizeTokens('Alchemist snr 2.pdf');