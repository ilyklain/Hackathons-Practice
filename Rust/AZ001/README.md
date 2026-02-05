# Amazon Hackathon Challenge – Optimized Bin Packing (Rust)

## Overview

This repository contains a Rust solution to an Amazon-style hackathon challenge focused on logistics optimization. The goal is to simulate how fulfillment centers pack items into shipping containers as efficiently as possible to reduce costs and carbon footprint.

Deeply inspired by the high-volume processing required during events like Prime Day, this challenge tests logic for categorization, sorting, and space optimization.

---

## Problem Description

You are given a list of items to be packed into standard shipping bins. Each item has:

- `id`: Unique identifier
- `weight`: Weight in kilograms
- `is_priority`: Boolean flag indicating if it's a priority shipment

---

## Objective

Implement a bin-packing logic that minimizes the number of bins used while ensuring all "Priority" items are processed first and that no bin exceeds its maximum weight capacity.

---

## Rules

- **Priority First**: All priority items must be packed before any standard item.
- **First Fit Decreasing**: Within each priority group, larger items should be packed first to optimize space.
- **Capacity Constraint**: No bin can exceed the weight limit `C`.
- **Greedy approach**: Use the first available bin that can accommodate the item.

---

## Input Format

Each item is represented as:

| Field | Type | Description |
|------|------|-------------|
| id | String | Unique item ID |
| weight | f64 | Weight of the item |
| is_priority | Boolean | Priority status |

---

## Output

A list of bins containing:
- Total bins used.
- Items contained in each bin.
- Current total weight per bin.

---

## Example

### Input

| id | weight | is_priority |
|----|--------|-------------|
| ITEM_001 | 4.5 | false |
| ITEM_002 | 2.0 | true |
| ITEM_003 | 8.0 | false |
| ITEM_004 | 5.5 | true |

Bin Capacity: `10.0 kg`

### Output

- **Bin 1**: ITEM_004 (5.5kg), ITEM_002 (2.0kg) -> Total: 7.5kg
- **Bin 2**: ITEM_003 (8.0kg) -> Total: 8.0kg
- **Bin 3**: ITEM_001 (4.5kg) -> Total: 4.5kg

---

## Solution Strategy

The implementation uses:

- **Sorting**: Multi-level sort (Priority -> Weight Descending).
- **First Fit Approximation**: Iterating through existing bins before opening a new one.
- **Efficient Data Structures**: `Vec<Bin>` and `Vec<Item>` with memory-safe clones where needed.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(n log n) for sorting + O(n * m) for packing (n items, m bins) |
| Space Complexity | O(n) |

---

## Language & Tools

| Item | Value |
|----|------|
| Language | Rust |
| Paradigm | Systems Programming |
| Focus | Efficiency, Memory Safety, Logistics |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world problems** and is not an official Amazon problem statement.
