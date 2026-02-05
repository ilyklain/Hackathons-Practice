# Amazon Hackathon Challenge – Inventory Sync G-Counter (Java)

## Overview

This repository contains a Java solution to an Amazon-style hackathon challenge focused on distributed systems and final consistency. The goal is to implement a Grow-only Counter (G-Counter), a type of CRDT used to aggregate values across multiple independent nodes safely.

---

## Problem Description

Manage stock levels across multiple warehouses. Each warehouse (node) can increment its own count, and these counts must be mergeable such that the system eventually reflects the global truth without complex locking mechanisms.

---

## Objective

Implement the `increment`, `merge`, and `getValue` logic using Map-based state tracking.

---

## Example

Warehouse A: {N1: 5}  
Warehouse B: {N1: 2, N2: 10}  
Result of Merge: {N1: 5, N2: 10} = 15

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(1) for increment, O(N) for merge/getValue |
| Space Complexity | O(N) where N is the number of nodes |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository
