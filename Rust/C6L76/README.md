# Cloudflare Hackathon Challenge – Rate Limiter Engine (Rust)

## Overview

This repository contains a Rust solution to a Cloudflare-style hackathon challenge focused on designing a high-performance rate limiting engine. The goal is to simulate how edge infrastructure controls abusive traffic while maintaining low latency and deterministic behavior.

This problem reflects real-world scenarios commonly faced by companies like Cloudflare, where traffic must be analyzed and limited efficiently at massive scale.

---

## Problem Description

You are given a stream of incoming HTTP requests. Each request contains:

- `ip`: Client IP address
- `timestamp`: Request time in seconds
- `endpoint`: Requested resource

Requests are **not guaranteed to be ordered**.

---

## Objective

Implement a rate limiter that determines whether each request should be **allowed** or **blocked** based on a fixed request limit per IP within a rolling time window.

---

## Rules

- Each IP can make **at most N requests** within a window of **W seconds**.
- Requests outside the window must be discarded.
- Requests must be processed in chronological order.
- If the request exceeds the limit, it must be blocked.
- The solution must be efficient for large request volumes.

---

## Input Format

Each request is represented as:

| Field | Type | Description |
|------|------|-------------|
| ip | String | Client IP address |
| timestamp | i64 | Request timestamp (seconds) |
| endpoint | String | Requested endpoint |

---

## Output

For each request, return whether it is:

- `ALLOW`
- `BLOCK`

---

## Example

### Input

| ip | timestamp | endpoint |
|----|-----------|----------|
| 1.1.1.1 | 1 | /login |
| 1.1.1.1 | 2 | /login |
| 1.1.1.1 | 3 | /login |
| 1.1.1.1 | 6 | /login |
| 1.1.1.1 | 7 | /login |

Rate limit: `3 requests / 5 seconds`

### Output

ALLOW
ALLOW
ALLOW
ALLOW
BLOCK



---

## Explanation

- Requests at timestamps 1, 2, and 3 are within the first window and allowed.
- At timestamp 6, the request at timestamp 1 expires.
- The request at timestamp 7 exceeds the limit within the window `[3, 7]` and is blocked.

---

## Solution Strategy

The implementation uses:

- Sorting by timestamp
- A `HashMap<String, VecDeque<i64>>` to track requests per IP
- A sliding window approach to evict expired timestamps
- Constant-time operations per request

This ensures optimal performance even with large input sizes.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(n log n) due to sorting |
| Space Complexity | O(n) |

---

## Language & Tools

| Item | Value |
|----|------|
| Language | Rust |
| Paradigm | Systems Programming |
| Focus | Performance, Safety, Scalability |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world problems** and is not an official Cloudflare problem statement.
