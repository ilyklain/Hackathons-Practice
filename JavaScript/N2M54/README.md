# Uber Hackathon Challenge | Grid Shortest Path (JavaScript)

## Overview

This repository presents a JavaScript solution to a challenge inspired by real-world problems tackled at Uber hackathons. The task simulates urban pathfinding on a grid with obstacles, requiring the implementation of an efficient shortest path algorithm using only the four cardinal directions.

## Problem Description

You are given a two-dimensional grid representing a map:
- `0` represents a traversable road.
- `1` represents an obstacle.

The goal is to determine the shortest path from the **top-left corner** to the **bottom-right corner**, moving only in four directions: up, down, left, and right. If no path exists, the algorithm should return `-1`.

## Example Input

``` Input
[
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0]
]

Output
5