/* Meta Hackathon Simulation | Problem A4C21

At Meta, social graphs are the core of how we connect people. Each user in our ecosystem has relationships—friendships—that form a vast, dynamic network. For this challenge, you're tasked with building a lightweight social graph engine that captures the essence of this system.

You will receive a simplified set of user data where each user has an ID, a name, and a list of friends (referenced by ID). Your mission is to build a set of robust and reusable functions that allow exploration and analysis of this social graph.

This challenge tests your ability to design clean data structures, implement efficient algorithms, and reason about social connectivity—all at the heart of Meta's products.




*/


function buildGraph(users) {
  const graph = new Map();

  for (const user of users) {
    graph.set(user.id, new Set(user.friends));
  }

  return graph;
}

// Common Friends

function mutalFriends(graph, userA, userB) {
    const friendsA = graph.get(userA);
    const friendsB = graph.get(userB);

    if (!friendsA || !friendsB) return [];

    return [...friendsA].filter(friend => friendsB.has(friend));

}

// Shorter way using BFS

function shortestPath(graph, start, target) {
     if (start === target) return [start];

     const queue = [[start]];
     const visited = new Set();
        visited.add(start);
        
        while (queue.length > 0) {
            const path = queue.shift();
            const node = path[path.lenght - 1 ];

            if (visited.has(node)) continue;
            visited.add(node);

            const neighbors = graph.get(node) || [];
            for (const neighbor of neighbors) {
                const newPath = [...path, neighbor];
                if (neighbor === target) {
                    return newPath;
                }
                queue.push(newPath);
            }
        }
        return null; // No path found
}


// 4. Friend Suggestions
function suggestFriends(graph,userId) { 
    const directFriends = graph.get(userId);
    if (!directFriends) return [];

    const suggestions = new Map();

    for (const friend of directFriends) {
        const friendsOfFriend = graph.get(friend) || new Set();
        for (const foaf of friendsOfFriend) {
            if (foaf !== userId && !directFriends.has(foaf)) {
                suggestions.set(foaf, (suggestions.get(foaf)|| 0) + 1);
                
            }
        }
    }

    return [...suggestions.entries()]
    .filter((_, count) => count > 2)
    .map(([userId]) => userId)
}

// 5. Is Connected
function isConnected(graph, userA, userB) {
    if (userA === userB) return true;

    const queue = [userA];
    const visited = new Set();
    visited.add(userA);

    while (queue.length > 0) {
        const current = queue.shift();
        const friends = graph.get(current) || new Set();

        for (const friend of friends) {
            if (friend === userB) return true;
            if (!visited.has(friend)) {
                visited.add(friend);
                queue.push(friend);
            }
        }
    }

    return false;
}


// Test Info

const users = [
  { id: 1, name: "Marina", friends: [2, 3] },
  { id: 2, name: "Gustavo", friends: [1, 4] },
  { id: 3, name: "Evie", friends: [1, 4] },
  { id: 4, name: "Matthew", friends: [2, 3, 5] },
  { id: 5, name: "Angel", friends: [4] }
];

const graph = buildGraph(users);

// Example names & user IDs

console.log("Mutual friends of 1 & 2:", mutualFriends(graph, 1, 2)); // [2]
console.log("Shortest path from 1 to 5:", shortestPath(graph, 1, 5)); // [1, 2, 4, 5]
console.log("Suggested friends for 1:", suggestFriends(graph, 1)); // [4]

/*


Developed and Solved by: Gustavo Jaspe AKA Strawyh

This code is a simple simulation of a Meta Hackathon challenge
It includes functions to build a user graph, find mutual friends, suggest friends, and check connectivity

Made in JavaScript, it uses basic data structures like Map and Set to manage relationships between users

Date: 8/3/2025
 
*/