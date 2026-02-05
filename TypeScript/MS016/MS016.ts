/*
  -------------------------------------
  ‣ Microsoft Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Visual Studio Code uses a "Tokenizer" to highlight syntax. 
  The tokenizer must identify keywords and identifiers quickly 
  in a stream of characters.

  » Problem:
  Write a TypeScript function that parses a string and returns 
  a list of tokens (Keyword, Identifier, Number).

  The system should:
    - Identify "if", "else", "function" as KEYWORDS.
    - Identify sequences of letters as IDENTIFIERS.
    - Identify sequences of digits as NUMBERS.

  » Example:
    Input: "if x 10"
    Output: [{type: 'KEYWORD', value: 'if'}, {type: 'IDENTIFIER', value: 'x'}, {type: 'NUMBER', value: '10'}]

  » Objective:
  Practice string parsing, regular expressions, and type safety in TypeScript.

  » Approach:
  - Split input by whitespace.
  - Use Regex or Map for classification.
  - Return an array of strongly typed objects.
*/

type TokenType = 'KEYWORD' | 'IDENTIFIER' | 'NUMBER' | 'UNKNOWN';

interface Token {
    type: TokenType;
    value: string;
}

const KEYWORDS = new Set(['if', 'else', 'function', 'return', 'const', 'let']);

function tokenize(input: string): Token[] {
    const words = input.split(/\s+/).filter(w => w.length > 0);

    return words.map(word => {
        if (KEYWORDS.has(word)) {
            return { type: 'KEYWORD', value: word };
        }

        if (/^\d+$/.test(word)) {
            return { type: 'NUMBER', value: word };
        }

        if (/^[a-zA-Z_]\w*$/.test(word)) {
            return { type: 'IDENTIFIER', value: word };
        }

        return { type: 'UNKNOWN', value: word };
    });
}

// --- Test ---
console.log("--- VS Code Syntax Tokenizer Simulation ---");
const code = "const result 42 if result function";
const tokens = tokenize(code);

tokens.forEach(t => {
    console.log(`[${t.type}] => ${t.value}`);
});
