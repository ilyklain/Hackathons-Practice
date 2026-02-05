/*
  -------------------------------------
  ‣ Notion Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Notion translates Markdown-like syntax into rich blocks. When a 
  user types # or -, the editor must instantly categorize the 
  line as a specific block type (Heading, List, Text).

  » Problem:
  Write a TypeScript function that parses a line of text.

  The system should:
    - Lines starting with "# " -> HEADING
    - Lines starting with "- " -> LIST_ITEM
    - Else -> TEXT_BLOCK
    - Return an object { type, content (without prefixes) }

  » Objective:
  Practice string categorization and pattern matching in TypeScript.
*/

type BlockType = "HEADING" | "LIST_ITEM" | "TEXT_BLOCK";

interface NotionBlock {
    type: BlockType;
    content: string;
}

function parseNotionLine(line: string): NotionBlock {
    if (line.startsWith("# ")) {
        return { type: "HEADING", content: line.substring(2) };
    }

    if (line.startsWith("- ")) {
        return { type: "LIST_ITEM", content: line.substring(2) };
    }

    return { type: "TEXT_BLOCK", content: line };
}

// --- Example Usage ---
const lines = [
    "# Project Roadmap",
    "- Task A",
    "Normal description text."
];

console.log("--- Notion Minimal Block Parser ---");
lines.forEach(l => {
    const block = parseNotionLine(l);
    console.log(`[${block.type}] -> ${block.content}`);
});
