
# Social Graph Engine Challenge

A lightweight social graph engine implementation that simulates core social networking functionality similar to Meta's social graph systems.

## Features

- **Graph Building**: Creates an efficient graph representation of user relationships
- **Mutual Friends**: Finds common friends between two users
- **Shortest Path**: Determines the shortest connection path between users
- **Friend Suggestions**: Generates friend recommendations based on network connections
- **Connectivity Check**: Verifies if two users are connected in the network

## Implementation Details

The engine uses JavaScript's built-in `Map` and `Set` data structures for efficient relationship management. Core functions include:


buildGraph(users)          // Constructs the social graph
mutualFriends(graph, a, b) // Finds mutual friends
shortestPath(graph, a, b)  // Finds shortest connection path
suggestFriends(graph, id)  // Generates friend suggestions
isConnected(graph, a, b)   // Checks user connectivity
```

## Usage 

const users = [
  { id: 1, name: "Marina", friends: [2, 3] },
  { id: 2, name: "Gustavo", friends: [1, 4] },
  { id: 3, name: "Evie", friends: [1, 4] },
  { id: 4, name: "Matthew", friends: [2, 3, 5] },
  { id: 5, name: "Angel", friends: [4] }
];

const graph = buildGraph(users);
console.log(mutualFriends(graph, 1, 2));     // Find mutual friends
console.log(shortestPath(graph, 1, 5));      // Find connection path
```

## Algorithm Complexity

- Graph Building: O(n) where n is number of users
- Mutual Friends: O(k) where k is number of friends
- Shortest Path: O(V + E) using BFS
- Friend Suggestions: O(n * k) where k is average friends per user

## Author

Developed by Gustavo Jaspe (Strawyh)

## Date

March 8, 2025
