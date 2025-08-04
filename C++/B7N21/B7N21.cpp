/*
  ---------------------------------------------
  ‣ NVIDIA Hackathon Challenge | Problem B7N21
  ---------------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh  
  Date: 08/03/2025

  » Problem:
  In high-performance systems, minimizing memory access is critical.
  You're given a list of integers, potentially very large. 
  Your task is to process this data to compute the sum, the maximum,
  and the average in a memory-efficient manner.

  » Constraints:
  - Traverse the array only once.
  - Avoid unnecessary memory usage.
  - Maintain performance at scale.

  » Objective:
  Build a class that takes in the dataset, processes it with a single pass,
  and exposes methods to return the total sum, maximum value, 
  and average (rounded to 2 decimal places).

  » Language: C++
  » Focus: Memory efficiency, class design, algorithm optimization
*/


#include <iostream>
#include <vector>
#include <iomanip>

#include <iostream>
#include <vector>
#include <climits>
#include <iomanip>

class DataProcessor {
public:
    DataProcessor(const std::vector<int>& inputData) : data(inputData) {}

    void process() {
        int count = 0;
        for (int num : data) {
            sum += num;
            if (num > maxVal) maxVal = num;
            count++;
        }
        average = count > 0 ? static_cast<double>(sum) / count : 0.0;
    }

    int getSum() const {
        return sum;
    }

    int getMax() const {
        return maxVal;
    }

    double getAverage() const {
        return std::round(average * 100.0) / 100.0;
    }

private:
    std::vector<int> data;
    int sum = 0;
    int maxVal = INT_MIN;
    double average = 0.0;
};

// Example usage
int main() {
    std::vector<int> numbers = {1, 3, 9, 2, 5};
    DataProcessor dp(numbers);
    dp.process();

    std::cout << "Sum: " << dp.getSum() << "\n";         
    std::cout << "Max: " << dp.getMax() << "\n";         
    std::cout << "Average: " << std::fixed << std::setprecision(2) << dp.getAverage() << "\n";

    return 0;
}