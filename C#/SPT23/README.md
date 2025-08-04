# Spotify Hackathon Challenge – Longest Skip Streak (SPT23)

## Problem Overview

In this Spotify-inspired challenge, the goal is to analyze user behavior during playlist playback. Specifically, the task is to determine the **longest consecutive streak of skipped songs** in a given listening session.

Each song in the session is represented as a boolean:
- `true` indicates the user skipped the song
- `false` means the song was played

This type of problem helps simulate real-world analytics on user behavior, which can be critical in refining recommendation systems and engagement metrics.

---

## Problem Statement

**Input:** A list of booleans representing the session (e.g., `[false, true, true, false, true, true, true, false]`)

**Output:** An integer representing the maximum number of consecutive `true` values (skipped songs)

**Example:**
```
Input:  [false, true, true, false, true, true, true, false]  
Output: 3
```

---

## Solution Approach

- Initialize a counter to track the current and maximum skip streak.
- Iterate through the session list:
  - If the song was skipped (`true`), increase the current streak.
  - If the song was played (`false`), reset the current streak.
  - Track the maximum value observed during the iteration.

This approach runs in linear time **O(n)** and requires no extra space.

---

## Language & Tools

| Language | Version     | Paradigm       |
|----------|-------------|----------------|
| C#       | .NET 6 / 7+ | Object-Oriented |

---

## How to Run

1. Make sure you have the [.NET SDK](https://dotnet.microsoft.com/download) installed.
2. Compile the program:
   ```bash
   dotnet build
   ```
3. Run the program:
   ```bash
   dotnet run
   ```

---

## Developed By

**Gustavo Jaspe**  
_Strawyh — August 2025_  
Part of the `Hackathons-Practice` repository.
