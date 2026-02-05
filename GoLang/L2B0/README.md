# Cloudflare Hackathon Challenge – Traffic Pattern Analysis (Golang)

## Overview

This repository contains a Go (Golang) solution to a Cloudflare-style hackathon challenge focused on analyzing high-volume network traffic. The goal is to process HTTP request logs efficiently and identify the most frequent IP address within a given rolling time window.

This problem reflects real-world scenarios faced by edge networks, such as traffic monitoring, anomaly detection, and abuse prevention.

---

## Problem Description

Each request log contains:
- `ipAddress`: The source IP of the request
- `timestamp`: The time of the request in seconds

Logs are not guaranteed to be ordered.

### Objective

Given a list of logs and a time window (in seconds), determine the IP address with the highest number of requests within that window.

### Rules

- Only requests within the rolling time window are counted.
- If multiple IPs have the same highest frequency, return the **lexicographically smallest** IP address.

---

## Example

### Input

| IP Address | Timestamp |
|-----------|-----------|
| 10.0.0.1  | 1         |
| 10.0.0.2  | 2         |
| 10.0.0.1  | 3         |
| 10.0.0.1  | 5         |
| 10.0.0.2  | 6         |

Window size: `5` seconds

### Output

`10.0.0.1`


---

## Solution Strategy

1. Sort all logs by timestamp.
2. Use a sliding window (two-pointer technique).
3. Maintain a frequency map for IP addresses.
4. Update the most frequent IP dynamically while adjusting the window.
5. Apply lexicographical ordering to break ties.

---

## Complexity Analysis

| Metric | Complexity |
|------|------------|
| Time | O(N log N) due to sorting |
| Space | O(N) |

Efficient enough to handle up to millions of logs.

---

## Technology Stack

| Technology | Purpose |
|-----------|---------|
| Go (Golang) | Core implementation |
| Maps | Frequency tracking |
| Sorting | Chronological ordering |


---

## Usage

### Prerequisites

- Go 1.23 or higher

### Installation

```bash
git clone <repository-url>
cd L2B0
go mod tidy
```

### Running the Code

```bash
go run L2B0.GO
```


## Author

**Gustavo Jaspe**  
AKA **Strawyh**

This challenge is part of a personal repository dedicated to practicing hackathon-style problems inspired by real-world engineering challenges from top technology companies.

---

## License

This project is intended for educational and practice purposes only.
