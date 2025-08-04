# NVIDIA Hackathon Challenge – Problem B7N21

**Developed and Solved by:** Gustavo Jaspe (Strawyh)  
**Date:** August 3, 2025  
**Language:** C++  
**Focus:** Memory Efficiency, Class Design, Algorithm Optimization

---

## Overview

In high-performance systems, minimizing memory access is critical.  
This challenge simulates a scenario where you're given a potentially large dataset of integers.  
Your task is to process the dataset using a **single pass** through memory, calculating:

- The total sum  
- The maximum value  
- The average (rounded to two decimal places)

---

## Problem Statement

> You are given a list of integers. Your objective is to create a class that can process this data in a memory-efficient and scalable way. The class must provide:
> - A method to return the sum of the elements.
> - A method to return the maximum value.
> - A method to return the average (rounded to 2 decimal places).
> 
> You must process the data **with a single traversal**, avoiding unnecessary memory usage.

---

## Sample Input

```cpp
std::vector<int> numbers = {1, 3, 9, 2, 5};
