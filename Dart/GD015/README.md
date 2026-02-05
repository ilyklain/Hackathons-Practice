# Google / Flutter Hackathon Challenge – Event Batcher (Dart)

## Overview

This repository contains a Dart solution to a Flutter-style hackathon challenge focused on stream optimization. The goal is to group events that occur in close temporal proximity ("Batching") to reduce the number of UI rebuilds or network requests.

---

## Problem Description

Given a list of event timestamps, group them into sub-lists where each group represents a single "Batch window".

---

## Objective

Build a reliable bucketization algorithm that handles irregular event timing efficiently.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(N log N) if sorting is needed, otherwise O(N) |
| Space Complexity | O(N) for the resulting nested list |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository
