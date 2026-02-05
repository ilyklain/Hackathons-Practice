# SpaceX Hackathon Challenge – Orbital Safety Monitor (Python)

## Overview

This repository contains a Python solution to a SpaceX-style hackathon challenge focused on orbital mechanics and safety. The goal is to monitor the positions of Starlink satellites and detect potential collisions by calculating minimum separation distances.

This problem reflects the high-stakes calculations required to maintain satellite constellations in Low Earth Orbit (LEO).

---

## Problem Description

You are given a snapshot of satellite positions in a 3D coordinate system. Each satellite has:

- `id`: Unique identifier
- `pos`: A tuple `(x, y, z)` representing spatial coordinates.

---

## Objective

Calculate the Euclidean distance between every pair of satellites to find the two closest ones and trigger a warning if they are below a safety threshold.

---

## Rules

- **3D Calculation**: Use the 3D distance formula.
- **Efficiency**: Compare all unique pairs without redundant calculations.
- **Threshold**: Compare the minimum distance against a predefined safety value.

---

## Input Format

| Field | Type | Description |
|------|------|-------------|
| id | String | Satellite ID |
| pos | Tuple (f64, f64, f64) | 3D coordinates |

---

## Example

### Input

- S1: (0, 0, 0)
- S2: (1, 1, 1)
- S3: (0.1, 0, 0)
- Threshold: 0.5

### Output

**ALERT**: S1 and S3 are too close! (Distance: 0.1)

---

## Solution Strategy

The implementation uses:

- **Math Library**: `math.sqrt` for distance calculations.
- **Nested Iteration**: Comparing each element `i` with elements `i+1` to `n`.
- **Thresholding**: Real-time evaluation of the minimum found distance.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(n^2) for the all-pairs comparison |
| Space Complexity | O(1) extra space (excluding input) |

---

## Language & Tools

| Item | Value |
|----|------|
| Language | Python |
| Paradigm | Procedural |
| Focus | Physics Calculations, Safety Systems |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world problems** and is not an official SpaceX problem statement.
