/*
  -------------------------------------
  ‣ Revolut Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Fintech apps like Revolut encourage saving through "Round-ups". 
  Whenever you buy something (e.g., $1.40), the app rounds it up to 
   the nearest dollar ($2.00) and sends the difference ($0.60) to 
  a savings "Vault".

  » Problem:
  Write a Swift function that calculates the round-up amount.

  The system should:
    - Receive: transactionPrice (Double).
    - If price is already an integer (e.g. 5.0), round-up is 0.
    - Else, round-up to next whole number and return the difference.

  » Objective:
  Practice mathematical rounding and ceiling functions in Swift.
*/

import Foundation

func calculateRoundUp(_ price: Double) -> Double {
    let ceiled = ceil(price)
    let diff = ceiled - price
    
    // Using precision check
    if diff < 0.001 { return 0.0 }
    
    return round(diff * 100) / 100.0 // Float precision fix
}

// --- Example Usage ---
print("Revolut Spare Change Vault Simulator")
print("Buy $1.20 -> Save: $\(calculateRoundUp(1.20))")
print("Buy $4.85 -> Save: $\(calculateRoundUp(4.85))")
print("Buy $10.00 -> Save: $\(calculateRoundUp(10.00))")
