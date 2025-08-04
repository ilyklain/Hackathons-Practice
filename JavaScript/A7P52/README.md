  # Apple Hackathon Challenge — Scroll Optimization Problem

  ## Overview

  This repository contains a coding challenge inspired by performance 
  optimization scenarios faced at Apple. The focus is on improving the 
  user experience by limiting unnecessary UI updates during rapid user 
  interactions, such as scrolling.

  ## Problem Description

  You are given a stream of integers representing delta values from scroll 
  events. Excessive DOM updates can harm battery life and reduce smoothness, 
  so the goal is to only trigger a UI re-render when the accumulated scroll 
  delta surpasses a given threshold T.

  ## Example

      Input:
        scrollStream = [5, 8, 2, 20, 10, 5]
        threshold = 15

      Output:
        [3, 5]

  ## Constraints

 ## - 1 ≤ n ≤ 10^5
 ## - 0 ≤ scrollStream[i] ≤ 1000
 ## - 1 ≤ threshold ≤ 10^6

  ## Solution

  The implementation uses a greedy single-pass approach (O(n)) to efficiently 
  track cumulative delta values and determine valid trigger points.

  ## Technologies Used

  | Language    | Purpose              |
  |-------------|----------------------|
  | JavaScript  | Main Implementation  |
  