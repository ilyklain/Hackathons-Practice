# Stripe Hackathon Challenge – Transaction Window Analysis (JavaScript)

## Overview

This repository contains a JavaScript solution to a Stripe-style hackathon challenge focused on real-time transaction analysis. The goal is to process payment events efficiently and identify the highest-spending customer within a rolling time window.

This problem reflects real-world scenarios in payment processing systems, fraud detection, and financial analytics at scale.

---

## Problem Description

Each payment event contains:
- `customerId`: Unique identifier of the customer
- `amount`: Transaction amount in cents
- `timestamp`: Time of the transaction in seconds

Events are not guaranteed to be ordered.

### Objective

Given a list of payment events and a time window (in seconds), determine the customer who spent the most money within that window.

### Rules

- Only transactions within the rolling time window are counted.
- If multiple customers have the same total spending, return the **lexicographically smallest** `customerId`.

---

## Example

### Input

| customerId | amount | timestamp |
|-----------|--------|-----------|
| c1 | 500 | 1 |
| c2 | 700 | 2 |
| c1 | 400 | 4 |
| c2 | 200 | 6 |

git clone <repository-url>
cd F4V02
npm install
```
node F4V02.js
```

### Output
c1


---

## Solution Strategy

1. Sort all payment events by timestamp.
2. Use a sliding window (two-pointer technique).
3. Maintain a running total of spending per customer.
4. Update the highest spender dynamically.
5. Apply lexicographical ordering to break ties.

---

## Complexity Analysis

| Metric | Complexity |
|------|------------|
| Time | O(N log N) due to sorting |
| Space | O(N) |

Efficient for large-scale transaction streams.

---

## Technology Stack

| Technology | Usage |
|-----------|------|
| JavaScript (ES6) | Core implementation |
| Node.js | Runtime environment |
| Map | Efficient key-value storage |

F4V02/

├── F4V02.js          # Main solution file

├── README.md         # This file

└── package.json      # Dependencies (if any)




## Author

**Gustavo Jaspe**  
AKA **Strawyh**

This challenge is part of a personal repository dedicated to practicing hackathon-style problems inspired by real-world engineering challenges from top technology companies.

---

## License

This project is intended for educational and practice purposes only.

