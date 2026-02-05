/*
  -------------------------------------
  ‣ Instagram Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Social media apps like Instagram need to display large numbers 
  (Likes, Followers) in a compact way (e.g., 1.5K, 2.2M) to save UI 
  space and make them easier to read at a glance.

  » Problem:
  Write a Swift function that formats an integer into a string 
  with K/M suffixes.

  The system should:
    - If < 1,000, return the number as string.
    - If < 1,000,000, return "{X.Y}K".
    - If >= 1,000,000, return "{X.Y}M".
    - Round to 1 decimal place.

  » Objective:
  Practice numeric scaling and string formatting in Swift.
*/

import Foundation

func formatSocialCount(_ count: Int) -> String {
    let num = Double(count)
    if count < 1000 {
        return "\(count)"
    } else if count < 1000000 {
        let value = num / 1000.0
        return String(format: "%.1fK", value)
    } else {
        let value = num / 1000000.0
        return String(format: "%.1fM", value)
    }
}

// Example Usage
print("Instagram Social Count Formatter")
print("Likes (150):   \(formatSocialCount(150))")
print("Likes (15400): \(formatSocialCount(15400))")
print("Likes (2300500): \(formatSocialCount(2300500))")
