# Airbnb Hackathon Challenge – International Pricing Engine (Swift)

## Overview

This repository contains a Swift solution to an Airbnb-style hackathon challenge focused on fintech and internationalization (i18n). The goal is to implement a smart rounding system that adjusts converted currencies to match psychological pricing patterns in different markets.

---

## Problem Description

You are given a base price in USD and a conversion rate. After converting the price, you must apply "Smart Rounding" rules:

- **Round Up**: If the fraction > 0.75, round to the next whole number (e.g., 85.80 -> 86.00).
- **Psychological Discount**: If the fraction < 0.25, round down to the previous whole number plus .99 (e.g., 85.15 -> 84.99).
- **Exact**: Otherwise, keep the value with 2 decimal precision.

---

## Objective

Build a utility that handles floating-point arithmetic precisely to ensure pricing consistency across global markets.

---

## Example

- **Input**: 100 USD, Rate: 0.92
- **Converted**: 92.00
- **Final**: 92.00

- **Converted**: 92.80 -> **93.00**
- **Converted**: 92.10 -> **91.99**

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(1) per conversion |
| Space Complexity | O(1) |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository
