# WordPress Hackathon Challenge – Comment Shield Filter (PHP)

## Overview

This repository contains a PHP solution to a WordPress-style hackathon challenge (Automattic). The goal is to build a simulated version of a comment spam filtering engine, similar to how Akismet protects millions of WordPress sites from automated bot traffic.

---

## Problem Description

Implement a security function that evaluates incoming comments before they are saved to the database. The system must maintain high performance while accurately identifying suspicious patterns.

---

## Filtering Rules

- **Blacklist**: Flag comments containing specific prohibited keywords.
- **Link Throttling**: Flag comments containing more than 2 external URLs (a common sign of SEO spam).
- **Author Identity**: Flag comments where the author name exceeds 50 characters, often seen in bot-generated strings.

---

## Objective

Demonstrate effective use of PHP's string and array manipulation functions, as well as basic regular expressions for pattern matching in a real-world security context.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(K * W) where K is content length and W is number of keywords |
| Space Complexity | O(1) extra space |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world problems** and is not an official Automattic/WordPress problem statement.
