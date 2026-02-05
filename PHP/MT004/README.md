# Meta Hackathon Challenge – Social Graph Anomaly Detector (PHP)

## Overview

This repository contains a PHP solution to a Meta-style hackathon challenge focused on social graph analysis and cybersecurity. The goal is to identify clusters of accounts (e.g., bots) that share suspicious amounts of mutual connections.

This problem simulates the pattern detection algorithms used to protect platform integrity and detect fake account networks.

---

## Problem Description

You are given a list of directional connections between two sets of users (a bipartite graph).

- `from`: The source account (Potential bot)
- `to`: The target account (Real user)

---

## Objective

Identify pairs of source accounts that follow a shared set of target accounts above a certain threshold.

---

## Rules

- **Adjacency mapping**: Group all targets for each source account.
- **Intersection**: Find the common elements between two source account follower lists.
- **Threshold**: Only report pairs sharing more than X mutual connections.

---

## Input Format

An array of associative arrays:
- `['from' => 'UserA', 'to' => 'UserB']`

---

## Example

### Input

- Bot_1 follows: [A, B, C]
- Bot_2 follows: [A, B, D]
- Threshold: 1

### Output

**ALERT**: Bot_1 & Bot_2 share 2 connections (A, B)

---

## Solution Strategy

The implementation uses:

- **Adjacency List**: Efficiently grouping targets by source using a hash map.
- **Array Intersect**: Leveraging PHP's built-in `array_intersect` for optimized set comparisons.
- **Pairwise Comparison**: Iterating through all unique pairs of source accounts.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(N^2 * K) where N = unique source users, K = average intersections |
| Space Complexity | O(C) where C = total number of connections |

---

## Language & Tools

| Item | Value |
|----|------|
| Language | PHP |
| Paradigm | Procedural |
| Focus | Graph Analysis, Cybersecurity |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world problems** and is not an official Meta problem statement.
