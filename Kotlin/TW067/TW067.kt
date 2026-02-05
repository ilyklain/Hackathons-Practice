/*
  -------------------------------------
  ‣ Twitch Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Twitch chat is famous for its "Emotes" (e.g., Kappa, PogChamp). 
  Before rendering a message, the Android client must scan the 
  text to identify which strings are actually emotes so it can 
  replace them with images.

  » Problem:
  Write a Kotlin function that counts emotes in a message.

  The system should:
    - Receive: message (String) and emotes (List of allowed emote names).
    - Return the total count of emotes found in the message.

  » Objective:
  Practice string splitting and frequency counting in Kotlin.
*/

fun countEmotes(message: String, emotes: List<String>): Int {
    val words = message.split(" ")
    return words.count { it in emotes }
}

fun main() {
    val myEmotes = listOf("Kappa", "PogChamp", "LUL", "ResidentSleeper")
    val chatMsg = "That play was amazing PogChamp ! Kappa Kappa"

    println("--- Twitch Chat Emote Detector ---")
    println("Message: \"$chatMsg\"")
    println("Emotes detected: ${countEmotes(chatMsg, myEmotes)}")
}
