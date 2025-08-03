/*
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
*/

function binPacking(weights, capacity) {
  weights.sort((a, b) => b - a);

  const bins = [];

  for (const weight of weights) {
    let placed = false;

    for (let i = 0; i < bins.length; i++) {
      if (bins[i] + weight <= capacity) {
        bins[i] += weight;
        placed = true;
        break;
      }
    }

    if (!placed) {
      bins.push(weight);
    }
  }

  return bins.length;
}

// Example usage
const items = [4, 8, 1, 4, 2, 1];
const binCapacity = 10;

console.log(`Minimum number of bins required: ${binPacking(items, binCapacity)}`);

