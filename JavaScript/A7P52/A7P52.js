/*
  ----------------------------
  ‣ Apple Hackathon Challenge
  ----------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 08/03/2025 

  » Problem:
  Apple values smooth user experience and energy efficiency. 
  You’re tasked with creating a function that simulates dynamic UI updates 
  in response to user input — but efficiently.

  You are given a stream of `n` integers (representing pixel deltas in a scroll event).
  To optimize rendering, your function should only trigger a re-render when the 
  cumulative scroll delta exceeds a defined threshold `T`.

  Your job is to:
    - Process the scroll stream.
    - Return the indices where re-rendering would be triggered.

  Example:
    Input: scrollStream = [5, 8, 2, 20, 10, 5], T = 15
    Output: [3, 5]

  Explanation:
    Cumulative sums:
      5 + 8 + 2 = 15 → threshold not yet exceeded
      +20 → triggers at index 3 (total = 35), reset sum to 0
      10 + 5 = 15 → threshold again reached, index 5

  » Constraints:
    - 1 ≤ n ≤ 10^5
    - 0 ≤ scrollStream[i] ≤ 1000
    - 1 ≤ T ≤ 10^6

  » Goal:
    Design for efficiency — O(n) time, minimal space.
*/

function detectReRenders(scrollStream, threshold) {
    let result = [];
    let sum = 0;

  for (let i = 0; i < scrollStream.length; i++) {
    sum += scrollStream[i];
    if (sum >= threshold) {
      result.push(i);
      sum = 0; // reset after triggering a re-render
    }
  }

    return result;
}

// Example usage:
console.log(detectReRenders[5, 8, 2, 20, 10, 5], 15); // Output: [3, 5]