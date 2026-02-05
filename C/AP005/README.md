# Apple Hackathon Challenge – Memory Defragmenter (C)

## Overview

This repository contains a C solution to an Apple-style hackathon challenge focused on low-level systems programming. The goal is to simulate a memory defragmentation process for the Apple Neural Engine, ensuring that active memory blocks are contiguous to minimize latency in ML workloads.

This problem reflects the performance-critical nature of embedded systems where every CPU cycle and memory access counts.

---

## Problem Description

You are given an array representing a series of memory blocks. Each block is either:
- `0`: Representing free/empty memory.
- `1-9`: Representing a data block belonging to a specific Process ID.

---

## Objective

Rearrange the memory blocks so that all active data (non-zero) is moved to the beginning of the buffer, maintaining their relative order, while all free space (zeros) is pushed to the end.

---

## Rules

- **In-place**: Try to minimize extra memory usage.
- **Relative Order**: If process 1 appeared before process 3, it must still appear before it after defragmentation.
- **Efficiency**: The solution should ideally traverse the buffer in a single pass (O(n)).

---

## Input Format

An integer array representing memory blocks.

---

## Example

### Input
`[0, 1, 0, 3, 2, 0, 5]`

### Output
`[1, 3, 2, 5, 0, 0, 0]`

---

## Solution Strategy

The implementation uses:
- **Two-Pointer Technique**: A `write_index` keeps track of where the next active block should be placed, while a loop index scans for non-zero values.
- **Single Pass Logic**: Moving data and then filling the tail ensures optimal O(n) performance.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(n) |
| Space Complexity | O(1) (In-place) |

---

## Language & Tools

| Item | Value |
|----|------|
| Language | C |
| Paradigm | Procedural / Low-level |
| Focus | Memory Management, Pointer Logic |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world problems** and is not an official Apple problem statement.
