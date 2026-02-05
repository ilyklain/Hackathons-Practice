# Netflix Hackathon Challenge – Viewing Pattern Analysis (TypeScript)

## Overview

This repository contains a complete TypeScript solution to a Netflix-style hackathon challenge focused on large-scale user behavior analysis. The goal is to process unordered watch events and identify the most frequent sequence of three movies watched in order across all users.

This problem mirrors real-world challenges in recommendation systems, analytics pipelines, and data-driven product decisions at scale.

---

## Problem Description

Each watch event includes:
- `userId`: Unique identifier of the user
- `timestamp`: When the movie was watched
- `movie`: Movie title

Events are not guaranteed to be ordered.

### Objective

Determine the most frequent sequence of **three movies watched in chronological order** across all users.

### Rules

- Sequences must respect chronological order.
- Each unique 3-sequence is counted **once per user**.
- If multiple sequences have the same highest frequency, return the **lexicographically smallest** one.

---

## Example

### Input

| userId | timestamp | movie        |
|------|-----------|--------------|
| u1   | 1         | Matrix       |
| u1   | 2         | Inception    |
| u1   | 3         | Interstellar |
| u2   | 4         | Matrix       |
| u2   | 5         | Inception    |
| u2   | 6         | Interstellar |

### Output

`["Matrix", "Inception", "Interstellar"]`


---

## Solution Strategy

1. Group all events by user.
2. Sort each user's events by timestamp.
3. Generate all possible 3-movie sequences per user.
4. Use a global frequency map to count patterns.
5. Apply lexicographical ordering for tie-breaking.

---

## Complexity Analysis

| Metric | Complexity |
|------|------------|
| Time | O(U × K³) where K is per-user watch count |
| Space | O(N) |

Designed for correctness, clarity, and hackathon-style evaluation.

---

## Technology Stack

| Technology | Usage |
|-----------|------|
| TypeScript | Core implementation |
| Node.js | Runtime |
| ES6 Map / Set | Efficient data handling |

---

## File Structure

/
├── M4S28.ts

└── README.md


---

## Author

**Gustavo Jaspe**  
AKA **Strawyh**

This challenge is part of a personal repository focused on practicing real-world hackathon and interview-style problems from top technology companies.

---

## License

This project is intended for educational and practice purposes only.

