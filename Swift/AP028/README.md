# Apple Music Hackathon Challenge – Recommendation Engine (Swift)

## Overview

This repository contains a Swift solution to an Apple Music-style hackathon challenge focused on personalized content delivery. The goal is to build a recommendation engine that analyzes a user's listening history to identify their preferred genre and suggest new, popular tracks from a global catalog.

---

## Problem Description

Recommendation systems are the backbone of modern streaming services. For this challenge, you must implement a logic that:
1. **Analyzes Sentiment**: Detect which musical genre the user listens to the most.
2. **Filters Content**: Find songs in the catalog that match that genre but haven't been played by the user yet (to avoid redundancy).
3. **Prioritizes Quality**: Sort the candidate songs by their "Popularity Score" so the user sees the best content first.

---

## Objective

Master data aggregation using Swift's `Dictionary`, use higher-order functions like `filter`, `map`, and `sorted`, and practice clean object-oriented design with `structs`.

---

## Rules

- **Exclusion**: Never recommend a song that is already in the user's history.
- **Accuracy**: If two genres have the same frequency, the engine can pick either one.
- **Performance**: Sorting should be efficient (descending order).

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(H + C log C) where H is history size and C is catalog size |
| Space Complexity | O(G + C) where G is unique genres and C is the recommendations list |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world recommendation algorithms** and is not an official Apple Music problem statement.
