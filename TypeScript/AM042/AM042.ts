/*
  -------------------------------------
  ‣ Amazon Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Amazon's checkout system allows users to apply multiple discounts 
  (e.g., Seasonal items 10% off + Prime Member 5% off). These 
  discounts must be applied sequentially to ensure the final price 
  is correct.

  » Problem:
  Write a TypeScript function that calculates stacked discounts.

  The system should:
    - Receive: originalPrice and a list of discountPercentages.
    - Apply each discount to the *remaining* total.
    - Return the final price.

  » Objective:
  Practice iterative reduction logic in TypeScript.
*/

function applyDiscounts(basePrice: number, discounts: number[]): string {
    let finalPrice = basePrice;

    discounts.forEach(percent => {
        const reduction = finalPrice * (percent / 100);
        finalPrice -= reduction;
    });

    return finalPrice.toFixed(2);
}

// --- Example Usage ---
const cartTotal = 200.00;
const promos = [10, 5]; // 10% then 5%

console.log("--- Amazon Checkout Stacked Promotions ---");
console.log(`Initial Cart: $${cartTotal}`);
console.log(`Final Price: $${applyDiscounts(cartTotal, promos)}`);
