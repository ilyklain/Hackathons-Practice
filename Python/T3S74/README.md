# Tesla Hackathon Challenge — Battery Load Balancer

## Overview

This challenge simulates a real-world scenario Tesla engineers might face when dealing with battery optimization across multiple cells. The task focuses on balancing energy efficiently, minimizing operations while ensuring uniform voltage distribution.

## Problem Statement

You are given a list of integers representing the voltage (in millivolts) of each cell in a Tesla battery pack. To ensure the pack remains balanced, you may perform operations where 1mV is transferred between any two cells.

**Goal**: Return the minimum number of operations required to make all voltages equal. If it's not possible, return `-1`.

## Example

```Python
Input: [3, 6, 9]
Output: 6

Input: [2, 3, 5]
Output: -1