# X (Twitter) Hackathon Challenge – Bot Wave Detector (Ruby)

## Overview

This repository contains a Ruby solution to a Twitter-style hackathon challenge focused on cybersecurity and platform integrity. The goal is to detect automated "Engagement Attacks" where multiple new accounts mention a target user simultaneously to disrupt their experience.

---

## Problem Description

Analyze a stream of mentions to identify targets under attack. A target is flagged if they receive a high volume of mentions from "young" accounts (recently created).

---

## Objective

Use Ruby's expressive syntax and powerful `Enumerable` module to filter and aggregate log data efficiently.

---

## Rules

- **Account Age**: Only analyze accounts younger than `Y` days.
- **Attack Threshold**: Flag targets receiving more than `X` mentions from these young accounts.
- **Reporting**: Output a list of unique target identifiers currently under attack.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(N) where N is the number of mentions |
| Space Complexity | O(T) where T is the number of unique targets |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository
