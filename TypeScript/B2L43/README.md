# AutoCompleteTrie

A TypeScript implementation of an efficient prefix-based autocomplete engine using a Trie data structure. This solution is designed for high-performance lookup and suggestion of strings in real-time search systems.

---

## Overview

This project implements a `Trie` (prefix tree) to:

- Insert words into memory efficiently
- Search for autocomplete suggestions by prefix
- Optionally limit the number of results
- Delete words from the structure

It is written entirely in TypeScript and prioritizes modularity, type safety, and clean traversal logic.

---

## Features

| Method | Description |
|--------|-------------|
| `insert(word: string): void` | Inserts a word into the Trie |
| `search(prefix: string, limit?: number): string[]` | Returns all words that begin with the given prefix, ordered alphabetically. If a `limit` is provided, it returns up to that number of results. |
| `delete(word: string): void` | Removes a word from the Trie if it exists |

---

## Example

```ts
const trie = new AutoCompleteTrie();

trie.insert("google");
trie.insert("golang");
trie.insert("gopher");
trie.insert("go");

console.log(trie.search("go"));
// Output: ["go", "golang", "google", "gopher"]

console.log(trie.search("go", 2));
// Output: ["go", "golang"]

trie.delete("golang");

console.log(trie.search("go"));
// Output: ["go", "google", "gopher"]
