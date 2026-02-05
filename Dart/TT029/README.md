# TikTok Hackathon Challenge – FYP Ranking Algorithm (Dart)

## Overview

This repository contains a Dart solution to a TikTok-style (ByteDance) hackathon challenge focused on recommendation systems and feed optimization. The "For You Page" (FYP) is TikTok's core feature, delivering a highly personalized stream of short-form videos to every user.

---

## Problem Description

The goal is to implement a ranking engine that determines the order in which videos appear in a user's feed. Unlike a simple chronological list, the FYP uses a multi-factor scoring system to balance interest, quality, and freshness.

### Ranking Factors:
1.  **Personalization (Category Match)**: Does the video category align with the user's specific interests?
2.  **Engagement Rate**: Based on real-time data like likes, comments, and shares.
3.  **Popularity (View Count)**: Higher views generally indicate "viral" potential.
4.  **Freshness (Time Decay)**: Newer content should be prioritized over older content to keep the feed alive.

---

## Objective

Master the implementation of weighted scoring systems, data modeling with classes, and advanced list sorting in Dart.

---

## Example Logic

- **Video A**: Tech (User Interest), 10k Views, 90% Engagement, 1h old.
- **Video B**: Comedy (User Interest), 200k Views, 40% Engagement, 24h old.

Even though Video B has more views, Video A might rank higher because it is much newer and has better engagement.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(N log N) dominated by the sorting algorithm |
| Space Complexity | O(N) to store the ranked list |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world recommendation algorithms** and is not an official TikTok or ByteDance problem statement.
