# Google Hackathon Challenge – Memory Arena (C++)

## Overview

This repository contains a C++ solution to a Google-style hackathon challenge focused on high-performance memory management. The goal is to implement a basic Memory Arena (Linear Allocator) to handle frequent small allocations without the overhead and fragmentation of standard `malloc`.

---

## Problem Description

Design a class that pre-allocates a contiguous block of memory and provides a way to carve out pieces for new objects. The allocator should be fast (O(1) allocation) and support resetting the entire pool at once.

---

## Rules

- **Pre-allocation**: Allocate the entire capacity upfront.
- **Alignment**: Ensure allocations are aligned (e.g., 8-byte boundary) for performance.
- **O(1) Operations**: Both `allocate` and `reset` must be extremely fast.
- **No Free**: Individual blocks cannot be freed; only the entire arena can be reset.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(1) for both allocation and reset |
| Space Complexity | O(Capacity) pre-allocated |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository
