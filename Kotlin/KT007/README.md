# Android Hackathon Challenge – Battery Task Scheduler (Kotlin)

## Overview

This repository contains a Kotlin solution to an Android-style hackathon challenge focused on mobile systems optimization. The goal is to simulate an OS-level task scheduler that defer background work based on battery life and task priority.

---

## Problem Description

Implement a logic that decides which tasks can run based on the device state:

- **Normal Mode (> 20%)**: Run High and Medium priority tasks.
- **Low Power Mode (<= 20%)**: Run ONLY High priority tasks.
- **Urgent Override**: Tasks marked as `isUrgent` must run regardless of battery.

---

## Objective

Use Kotlin's functional programming features (like `.filter`) and idiomatic syntax (like `when`) to create a readable and efficient scheduler.

---

## Example

### Input
- Battery: 10%
- [High, Medium, Urgent-Low]

### Output
- [High, Urgent-Low] (Medium is deferred)

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(n) where n is the number of tasks |
| Space Complexity | O(n) for the filtered result list |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository
