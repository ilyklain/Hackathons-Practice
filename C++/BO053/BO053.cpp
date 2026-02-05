/*
  -------------------------------------
  ‣ Boeing Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Autopilot systems must monitor a plane's altitude. If the plane 
  deviates from the "Target Altitude" by more than a specific 
  threshold, the system must trigger a correction command to 
  increase or decrease lift.

  » Problem:
  Write a C++ function that checks for altitude deviation.

  The system should:
    - Receive: current_altitude, target_altitude, and tolerance.
    - Return "STABLE" if within tolerance.
    - Return "ADJUST_UP" if too low.
    - Return "ADJUST_DOWN" if too high.

  » Objective:
  Practice precision math and safety-critical logic in C++.
*/

#include <iostream>
#include <string>
#include <cmath>

std::string monitor_altitude(double current, double target, double tolerance) {
    double diff = current - target;

    if (std::abs(diff) <= tolerance) {
        return "STABLE";
    }

    return (diff < 0) ? "ADJUST_UP ↑" : "ADJUST_DOWN ↓";
}

int main() {
    double target = 35000.0;
    double tolerance = 100.0;

    std::cout << "--- Boeing Flight Control Monitor ---" << std::endl;
    std::cout << "Status: " << monitor_altitude(34850.0, target, tolerance) << std::endl;
    std::cout << "Status: " << monitor_altitude(35050.0, target, tolerance) << std::endl;
    std::cout << "Status: " << monitor_altitude(35200.0, target, tolerance) << std::endl;

    return 0;
}
