# Microsoft Hackathon Challenge – Distributed Log System

## Overview

This project simulates a simplified distributed logging system, inspired by system design challenges from Microsoft hackathons. The objective is to handle out-of-order log entries while supporting efficient time-range queries and maintaining high performance.

## Problem Statement

You are tasked with building a logging system that meets the following requirements:

- Receives log entries with timestamps in the format `"YYYY-MM-DD HH:MM:SS"`.
- Accepts logs arriving out of chronological order.
- Supports fast insertion and retrieval of logs within a specified time range.

### Interface

| Method | Description |
|--------|-------------|
| `insert(String timestamp, String message)` | Stores a log message associated with the given timestamp. |
| `query(String startTimestamp, String endTimestamp)` | Retrieves all log messages between the start and end timestamps, inclusive. |

## Features

- Chronological storage using a balanced tree structure.
- Range queries performed efficiently using sub-map operations.
- Scales to handle large volumes of logs.

## Technology

| Component | Details |
|----------|---------|
| Language | Java |
| Version  | 17+ |

## Example Usage

```java
LogSystem system = new LogSystem();
system.insert("2025-08-03 14:00:00", "Server started");
system.insert("2025-08-03 14:05:00", "User login");
system.insert("2025-08-03 14:03:00", "Ping check");
system.insert("2025-08-03 14:07:00", "Database error");

List<String> logs = system.query("2025-08-03 14:00:00", "2025-08-03 14:06:00");
logs.forEach(System.out::println);