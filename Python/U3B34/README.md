# 🧠 Uber Hackathon Challenge – Bin Packing Optimization

## Overview

This project simulates a real-world logistics challenge inspired by Uber Hackathons. The goal is to implement an algorithm that minimizes the number of bins (vehicles or containers) required to pack a series of items with specific weights, without exceeding the maximum capacity of each bin.

The challenge is based on the **Bin Packing Problem**, a well-known optimization problem with practical applications in delivery systems, warehousing, and ride-sharing logistics.

## Problem Statement

Given:
- A list of item weights.
- A fixed bin capacity.

Determine:
- The **minimum number of bins** required to pack all items such that no bin exceeds the given capacity.

## Example

| Item Weights       | Bin Capacity | Expected Output |
|--------------------|--------------|-----------------|
| `[4, 8, 1, 4, 2, 1]` | `10`         | `2`             |

> One possible arrangement:
> - Bin 1: 8 + 2
> - Bin 2: 4 + 4 + 1 + 1

## Technologies

| Language | Version |
|----------|---------|
| Python   | 3.8+    |

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-user/uber-hackathon-bin-packing.git
   cd uber-hackathon-bin-packing
