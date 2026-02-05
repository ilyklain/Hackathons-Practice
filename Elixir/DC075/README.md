# Discord Hackathon Challenge – Safety Scanner (Elixir)

## Overview
Secure communities by identifying prohibited content in messages using functional pattern matching and collection processing.

## Objective
Implement a case-insensitive word filter that determines the safety status of a raw text string.

## Analysis
- **Time Complexity**: O(W * B) where W is message words and B is blacklist size.
- **Concepts**: Pipe operator, Enum module, Case-insensitive matching.
