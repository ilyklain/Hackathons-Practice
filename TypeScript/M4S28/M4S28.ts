/*
  ---------------------------------
  ‣ Netflix Hackathon Challenge
  ---------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 09/10/2025

  » Context:
  At Netflix, understanding user behavior is critical to improving
  recommendations and engagement. One common analysis is detecting
  viewing patterns across millions of users.

  In this challenge, you will analyze user watch history to identify
  the most frequent sequence of three movies watched in order by users.

  Each user generates events containing:
    - userId
    - timestamp
    - movieTitle

  Events are not guaranteed to be ordered.

  » Problem:
  Given a list of watch events, determine the most frequent sequence
  of three movies watched in chronological order across all users.

  If multiple sequences have the same frequency, return the
  lexicographically smallest one.

  » Objective:
  Return an array of three movie titles representing the most common
  3-sequence pattern.

  » Constraints:
  - 1 ≤ events.length ≤ 10^5
  - Each user may have watched multiple movies
  - Time complexity and clean data structures matter

  » Approach:
  - Group events by user
  - Sort each user's events by timestamp
  - Generate all unique 3-sequences per user
  - Count frequencies globally
  - Select the most frequent pattern with tie-breaking rules
*/

type WatchEvent = {
    userId: string;
    timestamp: number;
    movie: string;
};

class NetflixPatternAnalyzer {
    findMostFrequentPattern(events: WatchEvent[]): string[] {
        const userMap = new Map<string, WatchEvent[]>();

        // 1. Group events by user
        for (const event of events) {
            if (!userMap.has(event.userId)) {
                userMap.set(event.userId, []);
            }
            userMap.get(event.userId)!.push(event);
        }

        const patternCount = new Map<string, number>();

        // 2. Process each user's history
        for (const [, userEvents] of userMap) {
            userEvents.sort((a, b) => a.timestamp - b.timestamp);
            const movies = userEvents.map(e => e.movie);

            const seen = new Set<string>();

            // 3. Generate all 3-sequences
            for (let i = 0; i < movies.length - 2; i++) {
                for (let j = i + 1; j < movies.length - 1; j++) {
                    for (let k = j + 1; k < movies.length; k++) {
                        const pattern = `${movies[i]}|${movies[j]}|${movies[k]}`;
                        if (!seen.has(pattern)) {
                            seen.add(pattern);
                            patternCount.set(pattern, (patternCount.get(pattern) || 0) + 1);
                        }
                    }
                }
            }
        }

        // 4. Find best pattern
        let bestPattern = "";
        let bestCount = 0;

        for (const [pattern, count] of patternCount) {
            if (
                count > bestCount ||
                (count === bestCount && pattern < bestPattern)
            ) {
                bestCount = count;
                bestPattern = pattern;
            }
        }

        return bestPattern.split("|");
    }
}

// ---------------------
// Example Usage
// ---------------------

const events: WatchEvent[] = [
    { userId: "u1", timestamp: 1, movie: "Matrix" },
    { userId: "u1", timestamp: 2, movie: "Inception" },
    { userId: "u1", timestamp: 3, movie: "Interstellar" },

    { userId: "u2", timestamp: 4, movie: "Matrix" },
    { userId: "u2", timestamp: 5, movie: "Inception" },
    { userId: "u2", timestamp: 6, movie: "Interstellar" },

    { userId: "u3", timestamp: 7, movie: "Matrix" },
    { userId: "u3", timestamp: 8, movie: "Avatar" },
    { userId: "u3", timestamp: 9, movie: "Titanic" }
];

const analyzer = new NetflixPatternAnalyzer();
console.log(analyzer.findMostFrequentPattern(events));
// Output: ["Matrix", "Inception", "Interstellar"]
