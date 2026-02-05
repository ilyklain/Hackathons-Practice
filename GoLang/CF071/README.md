# Cloudflare Hackathon Challenge – Rate Limiting (Go)

## Overview
Implement a basic security layer that prevents a single source from overwhelming a system with excessive traffic.

## Objective
Use Go maps to maintain state across multiple requests and enforce a fixed burst limit.

## Analysis
- **Time Complexity**: O(1) per check.
- **Concepts**: State management, Security thresholds.
