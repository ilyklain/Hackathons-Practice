/*
  -------------------------------------
  ‣ AMD Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Modern CPUs process data in parallel using SIMD (Single Instruction, 
  Multiple Data). When adding two large arrays of numbers, an 
  optimized loop can process chunks of data more efficiently than 
  item-by-item.

  » Problem:
  Write a C++ function that sums two vectors element-wise.

  The system should:
    - Receive two `std::vector<int>` of the same size.
    - Return a new vector containing the sums.
    - Ensure the function handles empty vectors gracefully.

  » Objective:
  Practice vector iteration and memory allocation in C++.
*/

#include <iostream>
#include <vector>

std::vector<int> sum_parallel_simulation(const std::vector<int>& a, const std::vector<int>& b) {
    if (a.size() != b.size()) return {};

    std::vector<int> result;
    result.reserve(a.size()); // Optimization: pre-allocate memory

    for (size_t i = 0; i < a.size(); ++i) {
        result.push_back(a[i] + b[i]);
    }

    return result;
}

int main() {
    std::vector<int> cpu_data_1 = {10, 20, 30, 40};
    std::vector<int> cpu_data_2 = {5, 5, 5, 5};

    std::cout << "--- AMD Processor Data Summation ---" << std::endl;
    std::vector<int> result = sum_parallel_simulation(cpu_data_1, cpu_data_2);

    for (int val : result) {
        std::cout << "[" << val << "] ";
    }
    std::cout << std::endl;

    return 0;
}
