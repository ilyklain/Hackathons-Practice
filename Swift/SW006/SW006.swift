/*
  -------------------------------------
  ‣ Airbnb Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Airbnb operates globally, requiring real-time currency conversion and 
  dynamic pricing adjustments for millions of listings. To ensure a 
  consistent user experience, prices must be rounded according to 
  local market psychological pricing rules.

  » Problem:
  Write a Swift function that converts a base price from USD to a 
  target currency and applies "Smart Rounding".

  Rules:
    - Base price is in USD.
    - Conversion rate is provided.
    - If the converted price ends in > .75, round up to the next integer.
    - If it ends in < .25, round down to the nearest .99 of the previous integer.
    - Otherwise, return the exact converted value with 2 decimals.

  » Example:
    Price: 100.0 USD
    Rate: 0.85 (EUR)
    Converted: 85.0
    Result: 85.0 (Exact)

    Converted: 85.80 -> 86.0 (Round up)
    Converted: 85.15 -> 84.99 (Nearest .99)

  » Objective:
  Build a robust pricing utility for international markets using Swift's 
  precise decimal Handling.

  » Approach:
  - Perform the conversion using Double or Decimal.
  - Extract the fractional part.
  - Apply the conditional logic for rounding.
  - Return the formatted result.
*/

import Foundation

func applySmartRounding(priceInUSD: Double, rate: Double) -> Double {
    let converted = priceInUSD * rate
    let integerPart = floor(converted)
    let fractionalPart = converted - integerPart

    if fractionalPart > 0.75 {
        return integerPart + 1.0
    } else if fractionalPart < 0.25 {
        return integerPart - 0.01
    } else {
        return (converted * 100).rounded() / 100
    }
}

// Example Usage
let listings = [99.0, 150.5, 42.1, 200.0]
let usdToEurRate = 0.92

print("Airbnb International Pricing Engine")
for usdPrice in listings {
    let finalPrice = applySmartRounding(priceInUSD: usdPrice, rate: usdToEurRate)
    print("USD: $\(usdPrice) -> EUR: €\(String(format: "%.2f", finalPrice))")
}
