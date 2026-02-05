# Netflix Hackathon Challenge – Trending Genre Pairs (JavaScript)

## Overview

This repository contains a JavaScript solution to a Netflix-style hackathon challenge focused on data analysis and personalization. The goal is to identify "Trending Micro-clusters" by calculating the frequency of movie genre pairs that users watch together.

This problem simulates the backend logic needed to find content synergies and improve recommendation algorithms.

---

## Problem Description

You are given a list of user viewing events. Each event contains:

- `user`: User ID
- `genres`: An array of strings representing genres watched.

---

## Objective

Identify which pairs of genres are most commonly watched together across all users.

---

## Rules

- **Uniqueness**: A pair (A, B) is the same as (B, A).
- **Per-User Count**: A pair is counted only once per user, even if they watch multiple movies of that pair's genres.
- **Top N**: Return the top N results sorted by frequency in descending order.

---

## Input Format

Each view event is represented as:

| Field | Type | Description |
|------|------|-------------|
| user | String | Unique user ID |
| genres | Array<String> | List of genres watched |

---

## Example

### Input

- User 1: ["Sci-Fi", "Action", "Drama"]
- User 2: ["Action", "Sci-Fi"]

### Output (Top 1)

1. **Action & Sci-Fi**: 2 users

---

## Solution Strategy

The implementation uses:

- **Deduplication**: `Set` to ensure genres aren't double-counted for a single user.
- **Sort-based Pairing**: Sorting genres alphabetically to ensure "Action & Sci-Fi" and "Sci-Fi & Action" map to the same key.
- **Frequency Map**: Object-based hash map to aggregate global counts.
- **Sorting**: Final conversion to array and sort to extract the top results.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(U * G^2) where U = users and G = average genres per user |
| Space Complexity | O(P) where P = number of unique genre pairs |

---

## Language & Tools

| Item | Value |
|----|------|
| Language | JavaScript |
| Paradigm | Functional / Procedural |
| Focus | Data Aggregation, Combinatorics |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world problems** and is not an official Netflix problem statement.
