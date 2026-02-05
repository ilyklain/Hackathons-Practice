# WhatsApp Hackathon Challenge – End-to-End Encryption (JS)

## Overview

This repository contains a JavaScript solution to a WhatsApp-style hackathon challenge (Meta) focused on cybersecurity and data privacy. The goal is to simulate an End-to-End Encryption (E2EE) system using a symmetric XOR cipher and Base64 encoding for safe transport.

---

## Problem Description

In a secure messaging environment, data must never travel as "Plaintext". You must implement a bidirectional utility that masks message content using a secret key known only to the participants.

---

## Core Task

1. **XOR Cipher**: Apply the bitwise XOR operation between each character of the message and a rotating key.
2. **Standardization**: Convert the resulting binary-like string into a Base64 format to prevent character corruption during transmission over HTTP/WebSockets.
3. **Decryption**: Ensure the exact original message can be retrieved using the same key.

---

## Objective

Master bitwise operators (specifically `^`), string encoding formats, and the concept of symmetric encryption in a modern web environment.

---

## Complexity Analysis

| Metric | Value |
|------|-------|
| Time Complexity | O(N) where N is the length of the message |
| Space Complexity | O(N) to store the processed string |

---

## Author

Developed and solved by **Gustavo Jaspe (Strawyh)**  
Hackathon Practice Repository

---

## Disclaimer

This challenge is a **simulation inspired by real-world encryption principles** and is not an official WhatsApp or Signal protocol implementation.
