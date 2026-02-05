# EV Charging Scheduler — Microsoft Hackathon Simulation

## Overview

This project simulates a challenge inspired by Microsoft hackathons. The task is to efficiently schedule electric vehicle (EV) charging sessions across limited time slots while minimizing missed charging deadlines. The core of this challenge lies in prioritizing vehicle sessions to maximize resource usage without exceeding time constraints.

## Problem Statement

You are given a list of electric vehicles, where each vehicle requires a charging slot. Each vehicle has:
- An **ID**
- A **deadline** by which it must start charging
- A **priority score** (higher means more important to charge)

Only one vehicle can be charged per slot. The goal is to:
- Schedule the maximum number of high-priority vehicles
- Respect deadlines and avoid overlapping sessions

### Input Format

An array of EVs, each with:
```go
type Vehicle struct {
  ID       string
  Deadline int
  Priority int
}
```

### Output

A list of vehicle IDs scheduled for charging in the optimal order.

---

## Example

### Input
```go
vehicles := []Vehicle{
  {ID: "EV1", Deadline: 2, Priority: 100},
  {ID: "EV2", Deadline: 1, Priority: 19},
  {ID: "EV3", Deadline: 2, Priority: 27},
  {ID: "EV4", Deadline: 1, Priority: 25},
  {ID: "EV5", Deadline: 3, Priority: 15},
}
```

### Output
```
Scheduled Vehicles: [EV1 EV3 EV5]
```

---

## Scheduling Algorithm

The solution implements:
- A greedy algorithm using sorting by priority
- Deadline tracking to assign earliest possible slots
- Efficient lookup via a time-slot array

Time complexity: **O(n log n)** due to sorting  
Space complexity: **O(n)** for scheduling structure

---

## Tech Stack

| Language | Purpose         |
|----------|-----------------|
| Go       | Core algorithm  |
| Git      | Version control |

---

## Credits & Author
Developed by **Gustavo Jaspe AKA Strawyh**  
Challenge Date: **August 3, 2025**

---
