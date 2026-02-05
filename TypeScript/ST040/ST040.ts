/*
  -------------------------------------
  ‣ Stripe Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Stripe processes millions of payments. To reduce unnecessary API calls 
  to banks, the system performs a client-side validation using the 
  "Luhn Algorithm" (Mod 10) to verify if a credit card number is 
  mathematically valid.

  » Problem:
  Write a TypeScript function that implements the Luhn Algorithm.

  The system should:
    - Receive a string of numbers.
    - Double every second digit from right to left.
    - If doubling results in a number > 9, subtract 9.
    - Sum all digits.
    - Valid if the total sum is divisible by 10.

  » Objective:
  Practice numeric processing and data integrity in TypeScript.
*/

function isValidCard(cardNumber: string): boolean {
    const digits = cardNumber.replace(/\D/g, '').split('').map(Number);
    let sum = 0;
    let shouldDouble = false;

    for (let i = digits.length - 1; i >= 0; i--) {
        let val = digits[i];

        if (shouldDouble) {
            val *= 2;
            if (val > 9) val -= 9;
        }

        sum += val;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

// --- Example Usage ---
const cards = [
    "49927398716", // Valid
    "49927398717", // Invalid
    "1234567812345670" // Valid
];

console.log("--- Stripe Luhn Algorithm Validator ---");
cards.forEach(card => {
    console.log(`Card: ${card} -> ${isValidCard(card) ? 'VALID ✅' : 'INVALID ❌'}`);
});
