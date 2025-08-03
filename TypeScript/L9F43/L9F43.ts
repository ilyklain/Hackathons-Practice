/*
  --------------------------
  ‣ Amazon Hackathon Challenge
  --------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 08/03/2025 

  » Problem:
  You are given a list of package weights. A single delivery slot can carry 
  up to 50kg. Each slot can carry either:
    - one box
    - or two boxes if their total weight is ≤ 50kg

  » Objective:
  Return the minimum number of delivery slots needed to transport all boxes.

  » Approach:
  Greedy two-pointer method after sorting weights in ascending order.
  Pair the lightest and heaviest boxes without exceeding the 50kg limit.
  
*/


function minimumSlots(weights: number[]): number {
  // Sort the weights to allow greedy pairing
  weights.sort((a, b) => a - b);

  let left = 0;
  let right = weights.length - 1;
  let slots = 0;

  while (left <= right) {
    // If the lightest and heaviest can be paired
    if (weights[left] + weights[right] <= 50) {
      left++; // use the lighter box
      right--; // use the heavier box
    } else {
      // otherwise, send the heavier box alone
      right--;
    }
    slots++;
  }

  return slots;
}

// Example usage:
const boxes = [20, 30, 10, 40, 20, 30];
console.log(`Minimum delivery slots needed: ${minimumSlots(boxes)}`); // Output: 3
