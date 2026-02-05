/*
  -------------------------------------
  ‣ Robinhood Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Stock trading apps like Robinhood allow users to set "Limit Orders". 
  An alert or trade is triggered automatically when a stock's price 
  crosses a user-defined threshold (Target Price).

  » Problem:
  Write a Kotlin function that triggers alerts.

  The system should:
    - Receive: currentPrice, targetPrice, and alertType ("BUY" or "SELL").
    - If BUY: trigger if current <= target.
    - If SELL: trigger if current >= target.
    - Return "TRIGGERED" or "MONITORING".

  » Objective:
  Practice conditional business logic in Kotlin.
*/

fun checkTradeAlert(current: Double, target: Double, type: String): String {
    val isTriggered = when (type.uppercase()) {
        "BUY" -> current <= target
        "SELL" -> current >= target
        else -> false
    }
    
    return if (isTriggered) "TRIGGERED" else "MONITORING"
}

fun main() {
    println("Robinhood Limit Order Monitor")
    println("Stock $150, Target $145 (BUY): ${checkTradeAlert(150.0, 145.0, "BUY")}")
    println("Stock $140, Target $145 (BUY): ${checkTradeAlert(140.0, 145.0, "BUY")}")
    println("Stock $200, Target $210 (SELL): ${checkTradeAlert(200.0, 210.0, "SELL")}")
}
