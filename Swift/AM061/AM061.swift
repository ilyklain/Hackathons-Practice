/*
  -------------------------------------
  ‣ Apple Maps Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Apple Maps provides ETA (Estimated Time of Arrival) based on distance 
  and real-time traffic data. Heavy traffic significantly increases 
  the time needed to arrive at a destination.

  » Problem:
  Write a Swift function that calculates the ETA in minutes.

  The system should:
    - Receive: distance (km) and trafficLevel (0 to 2).
    - Base Speed: 50 km/h.
    - Traffic 1 (Medium): +20% time.
    - Traffic 2 (Heavy): +50% time.
    - Return arrival time in minutes.

  » Objective:
  Practice physics-based calculations and conditional modifiers in Swift.
*/

import Foundation

func calculateETA(distance: Double, trafficLevel: Int) -> Double {
    let baseSpeedKmh = 50.0
    var timeHours = distance / baseSpeedKmh
    
    switch trafficLevel {
    case 1:
        timeHours *= 1.20
    case 2:
        timeHours *= 1.50
    default:
        break
    }
    
    return timeHours * 60.0 // To minutes
}

// --- Example Usage ---
print("Apple Maps Navigation ETA Calculator")
let dist = 10.0
print("10km, No Traffic:    \(calculateETA(distance: dist, trafficLevel: 0)) mins")
print("10km, Heavy Traffic: \(calculateETA(distance: dist, trafficLevel: 2)) mins")
