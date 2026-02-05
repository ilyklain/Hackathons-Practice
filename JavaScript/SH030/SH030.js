/*
  -------------------------------------
  ‣ Shopify Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Shopify stores operate globally. A common requirement is to 
  display product prices in the user's local currency based on 
  real-time exchange rates, while applying a small "Buffer" 
  percentage to account for currency fluctuations.

  » Problem:
  Write a JavaScript function that converts a price and applies 
  a protection buffer.

  The system should:
    - Receive: basePrice (USD), exchangeRate (to local), and buffer (%).
    - Formula: FinalPrice = (basePrice * exchangeRate) * (1 + buffer)
    - Return a formatted string with 2 decimal places.

  » Objective:
  Practice numeric precision and financial formatting in JS.
*/

const convertPrice = (basePrice, exchangeRate, bufferPercent) => {
    const buffer = bufferPercent / 100;
    const localPrice = (basePrice * exchangeRate) * (1 + buffer);
    return localPrice.toFixed(2);
};

// Example Usage
const priceUSD = 49.99;
const rateToEUR = 0.92;
const safetyBuffer = 1.5; // 1.5%

console.log("Shopify Multi-Currency Price Converter");
console.log(`USD Price: $${priceUSD}`);
console.log(`EUR Price: €${convertPrice(priceUSD, rateToEUR, safetyBuffer)}`);
