/*
  -------------------------------------
  ‣ Uber Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Uber offers different ride tiers (UberX, UberXL, Black). When a group 
  tries to book a ride, the system must suggest only the cars that 
  can fit all passengers comfortably.

  » Problem:
  Write a Swift function that filters available car types.

  The system should:
    - Receive: passengerCount and availableCars (List of Type and Capacity).
    - Return a list of names for cars where capacity >= count.

  » Objective:
  Practice collection filtering and custom data structures in Swift.
*/

import Foundation

struct CarType {
    let name: String
    let capacity: Int
}

func getValidCars(passengers: Int, cars: [CarType]) -> [String] {
    return cars
        .filter { $0.capacity >= passengers }
        .map { $0.name }
}

// --- Example Usage ---
let fleet = [
    CarType(name: "UberX", capacity: 4),
    CarType(name: "UberXL", capacity: 6),
    CarType(name: "UberBlack", capacity: 4),
    CarType(name: "UberMoto", capacity: 1)
]

print("Uber Trip Capacity Filter")
print("For 5 passengers: \(getValidCars(passengers: 5, cars: fleet))")
print("For 1 passenger:  \(getValidCars(passengers: 1, cars: fleet))")
