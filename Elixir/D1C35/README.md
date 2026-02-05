# Discord Hackathon Challenge – Message Activity Analysis (Elixir)

## Overview

This repository contains an Elixir solution to a Discord-style hackathon challenge focused on analyzing message activity in high-traffic servers. The objective is to process message events efficiently and determine the most active user within a rolling time window.

This challenge reflects real-world moderation and analytics problems commonly faced by large communication platforms like Discord.

---

## Problem Description

Each message event contains:
- `user_id`: Unique identifier of the user
- `timestamp`: Time the message was sent (in seconds)
- `content`: Message content

Events are not guaranteed to be ordered.

### Objective

Given a list of message events and a time window (in seconds), determine which user sent the highest number of messages within that window.

### Rules

- Only messages inside the rolling time window are counted.
- If multiple users have the same message count, return the **lexicographically smallest** `user_id`.

---

## Example

### Input

| user_id | timestamp | content |
|--------|-----------|---------|
| u1 | 1 | hi |
| u2 | 2 | hello |
| u1 | 3 | spam |
| u1 | 5 | spam again |
| u2 | 6 | yo |

Window size: `5` seconds

### Output

u1


---

## Solution Strategy

1. Sort message events by timestamp.
2. Use a sliding window technique.
3. Maintain a count of messages per user.
4. Update the most active user dynamically.
5. Apply lexicographical ordering to resolve ties.

The solution is written in a functional style, following Elixir best practices.

---

## Complexity Analysis

| Metric | Complexity |
|------|------------|
| Time | O(N log N) due to sorting |
| Space | O(N) |

Efficient enough to handle large volumes of message data.

---

## Technology Stack

| Technology | Usage |
|-----------|------|
| Elixir | Core implementation |
| Functional Programming | Data processing |
| Maps | Frequency tracking |

---

## File Structure

├── D1C35.exs

└── README.md



---

## Author

**Gustavo Jaspe**  
AKA **Strawyh**

This challenge is part of a personal repository focused on practicing hackathon-style problems inspired by real-world engineering challenges from leading technology companies.

---

## License

This project is intended for educational and practice purposes only.
