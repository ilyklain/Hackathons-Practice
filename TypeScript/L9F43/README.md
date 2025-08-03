# Amazon Hackathon Challenge — Delivery Slot Optimization

## Description

This challenge simulates a logistics problem that Amazon could face in its delivery operations. Given a list of package weights, the goal is to minimize the number of delivery slots required. Each slot can:

- Hold one single package, or
- Hold two packages if their combined weight does not exceed **50kg**

---

## Problem Details

| Field            | Value                                         |
|------------------|-----------------------------------------------|
| Language         | TypeScript                                    |
| Company          | Amazon                                        |
| Challenge Type   | Greedy algorithm / Two-pointer optimization   |
| Input            | Array of positive integers (package weights)  |
| Output           | Minimum number of delivery slots needed       |
| Constraints      | 1 ≤ weight ≤ 50, and any number of packages   |

---

## Example

### Input

```[20, 30, 10, 40, 25]
