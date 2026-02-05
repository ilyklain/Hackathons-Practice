# OpenAI Hackathon Challenge – Token Usage Estimator (Python)

## Overview

This repository contains a Python solution to an OpenAI-style hackathon challenge focused on API resource management. The goal is to estimate the token cost of a chat conversation before sending it to a Large Language Model (LLM), helping developers stay within "Tokens Per Minute" (TPM) rate limits.

---

## Problem Description

LLMs don't read text character by character; they use "Tokens". Since API providers charge and limit based on tokens, we need a way to predict usage. For this challenge, we use a simplified estimation model:

- **Message Base**: Each message adds a fixed cost of 4 tokens.
- **Role Weight**: The role of the sender ("system", "user", "assistant") adds its character length to the count.
- **Content Weight**: Every 4 characters in the message content count as 1 token (rounded up).
- **Completion Buffer**: A global overhead of 3 tokens is added to every request.

---

## Objective

Implement a robust calculator that iterates through chat messages and aggregates token counts according to the specified weighting rules.

---

## Rules

- **Precision**: Content tokens must be rounded up (ceiling) for every message.
- **Structure**: Accept a list of dictionaries with `role` and `content` keys.
- **Safety**: Provide a check against a mock TPM limit.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(N) where N is the number of messages |
| Space Complexity | O(1) extra space |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world problems** (specifically OpenAI's `tiktoken` logic) and is not an official OpenAI problem statement.
