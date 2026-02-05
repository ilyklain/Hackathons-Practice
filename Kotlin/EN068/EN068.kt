/*
  -------------------------------------
  ‣ Evernote Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Evernote provides users with "Read Time" estimations for their 
  notes. This helps users plan their day by knowing if a meeting 
  summary takes 1 minute or 10 minutes to read.

  » Problem:
  Write a Kotlin function that estimates reading time.

  The system should:
    - Receive: text (String).
    - Average reading speed: 200 words per minute.
    - Return: estimated minutes (Integer, rounded up).

  » Objective:
  Practice math operations and string parsing in Kotlin.
*/

import kotlin.math.ceil

fun estimateReadTime(text: String): Int {
    val words = text.trim().split(Regex("\\s+")).filter { it.isNotEmpty() }
    if (words.isEmpty()) return 0
    
    val time = words.size / 200.0
    return ceil(time).toInt().coerceAtLeast(1)
}

fun main() {
    val shortNote = "This is a quick reminder for lunch."
    val longNote = "Word ".repeat(500)

    println("--- Evernote Read Time Estimator ---")
    println("Short Note: ${estimateReadTime(shortNote)} min")
    println("Long Note:  ${estimateReadTime(longNote)} mins")
}
