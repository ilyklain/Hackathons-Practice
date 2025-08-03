"""
  --------------------------
  ‣ Uber Hackathon Challenge
  --------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 08/03/2025 

  » Problem:
  Uber’s routing engine must handle real-time requests efficiently.
  Given a grid of city blocks (N x N), each cell can be:
    - 0: road
    - 1: obstacle
  
  » Objective:
  Find the shortest path from top-left to bottom-right,
  avoiding obstacles and moving in 4 directions (up, down, left, right).
  Return -1 if no path exists.

  » Approach:
  Classic Breadth-First Search (BFS) to explore shortest unweighted paths
  from source to destination while avoiding obstacles.
"""
from typing import List

def bin_packaing(weights: List[int], capacity: int) -> int:
    # Sort weights in descending order
    weights.sort(reverse=True)
    bins = []

    for weight in weights:
        placed = False
        for i in range(len(bins)):
            if bins[i] + weight <= capacity:
                bins[i] += weight
                placed = True
                break
        if not placed:
            bins.append(weight)
        
    return len(bins)

# Example

if __name__ == "__main__":
    items = [4, 8, 1, 4, 2, 1]
    bin_capacity = 10
    print(f"Minimum number of bins required: {bin_packaing(items, bin_capacity)}")
# Output: Minimum number of bins required: 3