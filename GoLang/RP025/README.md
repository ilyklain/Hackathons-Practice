# Rappi Hackathon Challenge – RappiTurbo Delivery Optimizer (Go)

## Overview

This repository contains a Go solution to a Rappi-style hackathon challenge focused on logistics and real-time decision making. Rappi is one of Latin America's leading SuperApps, and its "Turbo" feature promises deliveries in under 10 minutes through highly optimized micro-fulfillment centers and courier dispatching.

---

## Problem Description

The challenge is to determine if an incoming order is eligible for the "Turbo" status. This depends on three critical factors:
1. **Store Preparation Time**: The minutes needed to pack the order.
2. **Geospatial Distance**: The Euclidean distance between the store and the customer.
3. **Courier Velocity**: The estimated speed of the delivery partner (assumed to be 20 km/h for this model).

---

## Objective

Implement an ETA (Estimated Time of Arrival) predictor that calculates if the sum of preparation and travel time stays within the strict **10-minute** limit.

---

## Rules

- **Turbo Threshold**: Total time must be ≤ 10 minutes.
- **Physics**: Use the standard `Time = Distance / Speed` formula.
- **Efficiency**: The logistics engine must process these checks in milliseconds to handle peak hour demand.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(1) per order verification |
| Space Complexity | O(1) extra space |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world logistics problems** and is not an official Rappi problem statement.
