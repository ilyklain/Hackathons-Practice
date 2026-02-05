/*
  -------------------------------------
  ‣ Duolingo Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Duolingo's most critical engagement metric is the "Streak". A 
  streak continues if the user completes a lesson today OR if it 
  is still within the same calendar day as the last activity. 
  If more than 24 hours pass without activity, the streak resets.

  » Problem:
  Write a Swift function that determines if the streak is maintained.

  The system should:
    - Receive: lastLessonDate and currentStreak.
    - If now - lastLessonDate > 24 hours, return 0.
    - Else return currentStreak.

  » Objective:
  Practice date interval logic in Swift.
*/

import Foundation

func validateStreak(lastLesson: Date, current: Int) -> Int {
    let now = Date()
    let timeSinceLast = now.timeIntervalSince(lastLesson)
    
    let oneDayInSeconds: TimeInterval = 24 * 60 * 60
    
    if timeSinceLast > oneDayInSeconds {
        return 0
    }
    
    return current
}

// --- Example Usage ---
print("Duolingo Streak Persistence Logic")
let tenHoursAgo = Date(timeIntervalSinceNow: -10 * 3600)
let twoDaysAgo = Date(timeIntervalSinceNow: -48 * 3600)

print("Recent Activity (5 streak): \(validateStreak(lastLesson: tenHoursAgo, current: 5))")
print("Long Absence (10 streak): \(validateStreak(lastLesson: twoDaysAgo, current: 10))")
