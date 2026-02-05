# NVIDIA Hackathon Challenge – Bitmask Collision (C)

## Overview

This repository contains a C solution to an NVIDIA-style hackathon challenge focused on low-level optimization and graphics programming. The goal is to implement an ultra-fast collision detection system using 64-bit integers as spatial bitmasks.

---

## Problem Description

Check if two 8x8 sprites overlap. Instead of checking every pixel with a loop, we represent each sprite as a 64-bit integer (`unsigned long long`), where each bit represents a pixel's state (1 for occupied, 0 for empty).

---

## Objective

Use bitwise operators to perform the collision check in a single CPU cycle, demonstrating the power of bitwise logic in performance-critical software.

---

## Rules

- **Speed**: The check must be O(1).
- **Format**: Use 64-bit integers to represent the 8x8 grids.
- **Output**: Return a boolean or integer (1/0) indicating the result.

---

## Example

### Input
Sprite A: `0x1` (Binary: 000...001)  
Sprite B: `0x1` (Binary: 000...001)

### Output
**Collision!** (Bit 0 is 1 in both)

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(1) |
| Space Complexity | O(1) |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository
