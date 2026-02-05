/*
  -------------------------------------
  ‣ WhatsApp (Meta) Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  WhatsApp's core promise is "End-to-End Encryption". This ensures 
  that only the sender and the recipient can read what is sent. 
  While real systems use complex protocols like Signal, the basic 
  principle involves masking data using a secret key.

  » Problem:
  Write a JavaScript utility that performs a secure XOR Cipher on 
  message strings.

  The system should:
    - Receive a `message` and a `secretKey`.
    - Apply an XOR operation between each character of the message 
      and the key (cycling the key if it's shorter than the message).
    - Convert the result to a Base64 string for safe transmission.
    - Provide a matching function to decrypt (re-apply XOR).

  » Example:
    Message: "Hello"
    Key: "Key123"
    Encrypted: "FwsIDxo=" (Base64)
    Decrypted: "Hello"

  » Objective:
  Practice bitwise operations, character encoding (UTF-8/Base64), 
  and modular arithmetic.

  » Approach:
  - Iterate through the message string using `.charCodeAt()`.
  - Use the `^` (XOR) operator with the key's character code.
  - Use `btoa()` and `atob()` for Base64 conversion.
*/

const WhatsAppEncyptor = {
    /**
     * Encrypts or Decrypts a string using a secret key via XOR.
     * Note: Applying XOR twice with the same key restores the original value.
     */
    process(text, key) {
        if (!key) throw new Error("A secret key is required.");

        return text
            .split("")
            .map((char, index) => {
                // Get character codes
                const charCode = char.charCodeAt(0);
                const keyChar = key.charCodeAt(index % key.length);

                // XOR operation
                const masked = charCode ^ keyChar;

                // Return as character
                return String.fromCharCode(masked);
            })
            .join("");
    },

    /**
     * Encrypt + Base64 Encoding
     */
    encrypt(message, key) {
        const scrambled = this.process(message, key);
        // Use Buffer for Node.js or btoa for browser
        // Here we use a safe Buffer/btoa hybrid approach
        return typeof btoa !== "undefined"
            ? btoa(scrambled)
            : Buffer.from(scrambled, "binary").toString("base64");
    },

    /**
     * Base64 Decoding + Decrypt
     */
    decrypt(encodedMessage, key) {
        const scrambled = typeof atob !== "undefined"
            ? atob(encodedMessage)
            : Buffer.from(encodedMessage, "base64").toString("binary");

        return this.process(scrambled, key);
    }
};

// Example Usage
const MY_SECRET_KEY = "Strawy!#$&*()@[]{}<>?/";
const originalMessage = "I have the keys to the warehouse. Meet at midnight.";

console.log("WhatsApp End-to-End Encryption Simulation");
console.log("-----------------------------------------");
console.log(`Original:  "${originalMessage}"`);

const encrypted = WhatsAppEncyptor.encrypt(originalMessage, MY_SECRET_KEY);
console.log(`Encrypted: "${encrypted}" (Base64)`);

const decrypted = WhatsAppEncyptor.decrypt(encrypted, MY_SECRET_KEY);
console.log(`Decrypted: "${decrypted}"`);

if (originalMessage === decrypted) {
    console.log("\nStatus: [INTEGRITY] Message restored successfully.");
}
