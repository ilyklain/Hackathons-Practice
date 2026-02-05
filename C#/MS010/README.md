# Microsoft Hackathon Challenge – Cloud Load Balancer (C#)

## Overview

This repository contains a C# solution to a Microsoft-style hackathon challenge focused on cloud infrastructure. The goal is to simulate a Weighted Round Robin load balancer similar to those used in Azure to distribute traffic across virtual machines with different performance tiers.

---

## Problem Description

Distribute incoming requests across a set of servers based on their `Weight`. A server with weight 3 should receive 3 consecutive requests before the load balancer moves to the next server in the list.

---

## Objective

Implement a stateful `LoadBalancer` class that manages the distribution logic and resets counters upon completing a server's quota.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(1) per request |
| Space Complexity | O(S) where S is the number of servers |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository
