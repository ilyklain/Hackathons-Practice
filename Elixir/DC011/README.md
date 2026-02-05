# Discord Hackathon Challenge – Message Deduplicator (Elixir)

## Overview

This repository contains an Elixir solution to a Discord-style hackathon challenge focused on real-time messaging and system stability. The goal is to filter out redundant, rapidly repeated messages from the same user.

---

## Problem Description

Analyze a message stream and flag any message that is identical to the user's PREVIOUS message as `REDUNDANT`.

---

## Objective

Practice Elixir's tail-recursive pattern matching and immutable state management.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(N) |
| Space Complexity | O(U) where U is the number of active users |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository
