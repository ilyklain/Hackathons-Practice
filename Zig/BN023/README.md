# Bun Hackathon Challenge – Fast Header Parser (Zig)

## Overview

This repository contains a Zig solution to a Bun-style hackathon challenge. Bun is a modern JavaScript runtime that achieves its incredible performance by leveraging Zig's low-level control over memory and its powerful "comptime" features. This challenge focuses on high-speed string parsing, a core task in web servers and runtimes.

---

## Problem Description

Web servers receive HTTP headers as plain text. To process them, the server must quickly identify the key and its corresponding value. In performance-critical systems, we avoid "allocating" new strings; instead, we use **Slices** (pointers to sections of the original string) to save memory and time.

---

## Objective

Implement a "Zero-copy" parser that iterates through a raw header block and extracts key-value pairs using Zig's slices.

---

## Rules

- **Zero-copy**: Do not create new copies of the strings. Reference the original buffer.
- **Precision**: Handle the `: ` and `\r\n` delimiters correctly.
- **Safety**: Zig provides safety even without a garbage collector. Ensure you stay within the bounds of the input string.

---

## Example

### Input
`"X-Cache: HIT\r\nX-Served-By: Bun-Core"`

### Output
- Key: `X-Cache`, Value: `HIT`
- Key: `X-Served-By`, Value: `Bun-Core`

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(N) where N is the length of the string |
| Space Complexity | O(1) (No extra allocations) |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world systems** (specifically Bun's HTTP parser) and is not an official Bun problem statement.
