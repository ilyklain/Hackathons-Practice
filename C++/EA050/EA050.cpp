/*
  -------------------------------------
  ‣ Electronic Arts (EA) Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  In competitive games like "FIFA" or "Battlefield", managing a 
  character's stamina is crucial. Running or performing actions 
  depletes stamina, while resting recovers it. The engine must 
  ensure the values stay within a specific range (0 to 100).

  » Problem:
  Write a C++ class `StaminaManager` to handle a player's energy.

  The system should:
    - Have a `stamina` variable (current energy).
    - Method `drain(amount)`: decreases stamina but not below 0.
    - Method `recover(amount)`: increases stamina but not above 100.
    - Method `get_percentage()`: returns the current level.

  » Objective:
  Practice data encapsulation and clamping in C++.
*/

#include <iostream>
#include <algorithm>

class StaminaManager {
private:
    float stamina;
    const float max_stamina = 100.0f;

public:
    StaminaManager() : stamina(100.0f) {}

    void drain(float amount) {
        stamina = std::max(0.0f, stamina - amount);
    }

    void recover(float amount) {
        stamina = std::min(max_stamina, stamina + amount);
    }

    float get_value() const {
        return stamina;
    }
};

int main() {
    StaminaManager player;

    std::cout << "--- EA Sports Stamina Monitor ---" << std::endl;
    std::cout << "Initial: " << player.get_value() << "%" << std::endl;

    player.drain(40.0f);
    player.recover(10.0f);
    
    std::cout << "After Action: " << player.get_value() << "%" << std::endl;

    player.drain(150.0f); // Massive drain
    std::cout << "Empty State: " << player.get_value() << "%" << std::endl;

    return 0;
}
