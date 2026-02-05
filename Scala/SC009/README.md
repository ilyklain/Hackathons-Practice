# LinkedIn Hackathon Challenge – Connection Degree Finder (Scala)

## Overview

This repository contains a Scala solution to a LinkedIn-style hackathon challenge focused on Social Graph Analysis. The goal is to determine the "degree of separation" between two users, specifically identifying "Second Degree" connections.

---

## Problem Description

In a social network, two people are **Second Degree** connections if they are NOT directly connected but share at least one mutual friend.

---

## Objective

Leverage Scala's immutable Collections and Set operations to perform a high-performance check on a connection graph.

---

## Rules

- **Mutual Check**: High efficiency using set intersection.
- **Direct Check**: Must return `false` if the users are already directly connected.
- **Self Check**: Must return `false` if comparing a user with themselves.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(K) where K is the number of connections of the user with fewer friends |
| Space Complexity | O(1) extra space (ignoring the input graph) |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository
