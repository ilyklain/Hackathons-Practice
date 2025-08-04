# Netflix Hackathon Challenge – Pattern Discovery Engine

## Overview

In this challenge, inspired by a real-world scenario at Netflix, you are tasked with analyzing user behavior based on viewing patterns. The goal is to identify the most common 3-sequence of content watched by users in chronological order. This exercise simulates the complexity of analyzing massive streaming logs to derive meaningful usage trends.

This repository contains a complete JavaScript solution designed with clean, readable logic and scalable practices.

---

## Problem Statement

Netflix tracks user activity for every show watched, logging userId, timestamp, and the show's name. Given a set of these logs, your task is to determine the most frequent **3-sequence** (three titles watched in exact order) across all users.

### Input Format

An array of objects:

```js
[
  { user: 'A', timestamp: 1, show: 'X' },
  { user: 'A', timestamp: 2, show: 'Y' },
  { user: 'A', timestamp: 3, show: 'Z' },
  ...
]
```

### Output

Return the most frequent 3-sequence across all users:
```js
['X', 'Y', 'Z']
```

If multiple sequences have the same maximum frequency, return the lexicographically smallest one.

---

##  Example

### Input:
```js
[
  { user: 'u1', timestamp: 1, show: 'A' },
  { user: 'u2', timestamp: 2, show: 'B' },
  { user: 'u1', timestamp: 3, show: 'B' },
  { user: 'u1', timestamp: 4, show: 'C' },
  { user: 'u2', timestamp: 5, show: 'C' },
  { user: 'u2', timestamp: 6, show: 'A' },
  { user: 'u1', timestamp: 7, show: 'D' }
]
```

### Output:
```js
['A', 'B', 'C']
```

---

##  Tech Stack

| Language     | Tools Used       | Difficulty |
|--------------|------------------|------------|
| JavaScript   | Node.js, V8      |  Medium  |

---

##  Requirements

- Efficient traversal of input logs
- Stable and deterministic sorting
- Handling ties lexicographically
- Proper use of maps/sets for counting patterns

---

##  Testing

This solution includes basic test cases. You can add more edge cases or large dataset simulations to stress-test the logic.

---

##  File Structure

```
/netflix-pattern-analysis
│
├── index.js            # Solution
└── README.md           # Problem description & documentation
```

---

##  Author

Developed by Gustavo Jaspe (Strawyh)  
Hackathon Practice  
Date: 08/03/2025