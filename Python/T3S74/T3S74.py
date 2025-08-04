"""
----------------------------------------------
‣ Tesla Hackathon Challenge — Battery Balancer
----------------------------------------------

Developed and Solved by: Gustavo Jaspe AKA Strawyh
Date: 08/03/2025

» Problem:
You're given a list of battery cell voltages. To maximize efficiency 
and lifespan, Tesla requires balanced voltage across all cells. 
You may transfer 1mV at a time from one cell to another.

» Objective:
Return the minimum number of transfers needed to equalize all cells, 
or -1 if it's impossible.

» Approach:
- Check if total sum is divisible by length.
- Use a greedy approach to count how much each cell deviates from the average.
"""


def min_voltage_transfers(cells):
    total = sum(cells)
    n = len(cells)

    if total % n != 0:
        return -1
    target = total // n

    transfers = 0

    for cell in cells:
        transfers += abs(cell - target)

        return transfers // 2 # Each transfer fixes two cells

    # Example usage:
print(min_voltage_transfers([3, 6, 9]))  # Output: 6
print(min_voltage_transfers([2, 3, 5]))  # Output: -1
    
