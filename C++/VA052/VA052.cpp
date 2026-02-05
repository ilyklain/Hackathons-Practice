/*
  -------------------------------------
  ‣ Valve (Steam) Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Valve's games (like CS:GO or Dota 2) feature an "Item Drop" system. 
  When a player opens a chest, a random number decides the rarity 
  of the skin. Rare items have a lower percentage of appearing 
  than common items.

  » Problem:
  Write a C++ function that simulates a loot box roll.

  The system should:
    - Receive a random integer from 1 to 100.
    - Return "LEGENDARY" if 1-5.
    - Return "RARE" if 6-25.
    - Return "COMMON" if 26-100.

  » Objective:
  Practice probability mapping and conditional trees in C++.
*/

#include <iostream>
#include <string>
#include <random>

std::string roll_loot_box() {
    // Generate random 1-100
    static std::random_device rd;
    static std::mt19937 gen(rd());
    std::uniform_int_distribution<> dis(1, 100);

    int roll = dis(gen);

    if (roll <= 5) return "LEGENDARY";
    if (roll <= 25) return "RARE";
    return "COMMON";
}

int main() {
    std::cout << "Steam Inventory Loot Box Simulator" << std::endl;
    
    for (int i = 0; i < 10; ++i) {
        std::cout << "Opening box #" << (i+1) << ": " << roll_loot_box() << std::endl;
    }

    return 0;
}
