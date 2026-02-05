/*
  -------------------------------------
  ‣ Spotify Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Spotify's mobile app includes a "Safety Volume" feature. If a song 
  is exceptionally loud, the system automatically caps the output 
  level to protect the user's hearing and prevent hardware clipping.

  » Problem:
  Write a Kotlin function that caps the volume level.

  The system should:
    - Receive: currentVolume (0-100) and maxAllowed (0-100).
    - If current > max, return max.
    - Else return current.
    - Result must be an Integer.

  » Objective:
  Practice basic constraints and idiomatic Kotlin (coerceAtMost).
*/

fun normalizeVolume(current: Int, maxAllowed: Int): Int {
    return current.coerceAtMost(maxAllowed)
}

fun main() {
    println("--- Spotify Audio Safety Controller ---")
    println("Normal Volume (50/100): ${normalizeVolume(50, 80)}")
    println("Loud Volume (95/80):   ${normalizeVolume(95, 80)} (CAPPED)")
}
