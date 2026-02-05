# Cash App Hackathon Challenge – P2P Transaction Engine (C#)

## Overview

This repository contains a C# solution to a Cash App-style hackathon challenge focused on fintech and fraud prevention. Cash App (by Block, Inc.) provides a seamless peer-to-peer (P2P) payment experience. Behind the scenes, the system must process transactions with high integrity while detecting suspicious activity instantly.

---

## Problem Description

Implement a secure backend engine to handle transfers between users. The engine must validate balances and apply a set of "Fraud Guard" rules to protect users.

---

## Business Rules

- **Integrity**: Subtract the amount from the sender and add it to the receiver only if all checks pass.
- **Limit Security**: Any transaction greater than **$5,000** must be flagged as `PENDING_REVIEW` and not processed immediately.
- **Spam Protection**: Detect if a user tries to send the exact same amount to the same person twice in a row (potential duplicate or bot error).
- **Funds Validation**: Ensure the sender never goes into a negative balance.

---

## Objective

Demonstrate proficiency in C# object-oriented programming, using enums and collections (Dictionaries) to manage application state and business logic.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(1) per transaction |
| Space Complexity | O(A) where A is the number of active accounts |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world fintech systems** and is not an official Cash App/Block, Inc. problem statement.
