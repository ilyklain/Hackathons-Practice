/*
  -------------------------------------
  ‣ Ferrari Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  F1 cars use LED indicators to tell drivers exactly when to upshift. 
  Shifting too early causes a loss of power, while shifting too 
  late (hitting the rev limiter) can damage the engine.

  » Problem:
  Write a C++ function that recommends a shift action based on RPM.

  The system should:
    - Optimal Shift Range: 11,500 - 12,000 RPM.
    - Max RPM (Redline): 12,500 RPM.
    - Return: "IDLE", "KEEP_PUSHING", "SHIFT_NOW", or "DANGER_REDS".

  » Objective:
  Practice performance monitoring and threshold management in C++.
*/

#include <iostream>
#include <string>

std::string get_shift_recommendation(int rpm) {
    if (rpm < 5000) return "IDLE";
    if (rpm < 11500) return "KEEP_PUSHING";
    if (rpm <= 12000) return "SHIFT_NOW! 🏎️";
    return "DANGER_REDS! 🔥";
}

int main() {
    int test_rpms[] = {2000, 10000, 11800, 12600};

    std::cout << "--- Ferrari F1 Telemetry System ---" << std::endl;
    for (int r : test_rpms) {
        std::cout << "RPM: " << r << " -> " << get_shift_recommendation(r) << std::endl;
    }

    return 0;
}
