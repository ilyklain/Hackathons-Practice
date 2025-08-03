class TrieNode {
  children: Record<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

export class AutoCompleteTrie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.isEndOfWord = true;
  }

  search(prefix: string, limit?: number): string[] {
    let node = this.root;

    for (const char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }

    const results: string[] = [];
    this.dfs(node, prefix, results, limit);
    return results;
  }

  private dfs(node: TrieNode, path: string, results: string[], limit?: number): void {
    if (results.length === limit) return;

    if (node.isEndOfWord) {
      results.push(path);
    }

    const sortedKeys = Object.keys(node.children).sort();
    for (const char of sortedKeys) {
      if (results.length === limit) break;
      this.dfs(node.children[char], path + char, results, limit);
    }
  }

  delete(word: string): void {
    this.deleteHelper(this.root, word, 0);
  }

  private deleteHelper(node: TrieNode, word: string, index: number): boolean {
    if (index === word.length) {
      if (!node.isEndOfWord) return false;
      node.isEndOfWord = false;
      return Object.keys(node.children).length === 0;
    }

    const char = word[index];
    const child = node.children[char];

    if (!child) return false;

    const shouldDeleteChild = this.deleteHelper(child, word, index + 1);

    if (shouldDeleteChild) {
      delete node.children[char];
      return Object.keys(node.children).length === 0 && !node.isEndOfWord;
    }

    return false;
  }
}

/*

Developed and Solved by: Gustavo Jaspe AKA Strawyh

This code simulates a Google Hackathon-style challenge focused on efficient string search.
It implements a Trie (prefix tree) data structure to support insertions, autocompletion, and deletions of words.
This is useful in real-world applications like search engines, autocomplete systems, and command line interfaces.

The Trie is implemented using a recursive depth-first search (DFS) and maintains lexicographic order in suggestions.

Language: TypeScript
Date: 8/3/2025

*/