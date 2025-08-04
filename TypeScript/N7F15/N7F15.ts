/*
  ---------------------------------------------
  ‣ Netflix Hackathon Simulation | N7F15
  ---------------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 08/03/2025

  » Problem:
  Netflix wants to identify the most common sequences of three consecutive movies 
  watched by users in order to improve its recommendation system.

  You are given a list of user viewing records, each containing:
    - userId: string
    - timestamp: number (UNIX)
    - movie: string

  » Objective:
  For all users, identify the most frequent pattern of three movies watched in order.
  If there are multiple, return any of the most frequent ones.

  » Constraints:
    - All users have at least 3 viewing records.
    - A user can watch the same movie multiple times.
    - Patterns must be in strictly increasing timestamp order.

  » Approach:
  1. Group records by user.
  2. Sort each user's records by timestamp.
  3. Extract all 3-sequence patterns.
  4. Count pattern frequencies across all users.
  5. Return the most frequent 3-movie sequence.

*/

type ViewingRecord = {
  userId: string;
  timestamp: number;
  movie: string;
};

function mostCommonThreeMovieSequence(records: ViewingRecord[]): string[] {
  const userMap: Map<string, ViewingRecord[]> = new Map();

  // Step 1: Group by user
  for (const record of records) {
    if (!userMap.has(record.userId)) {
      userMap.set(record.userId, []);
    }
    userMap.get(record.userId)!.push(record);
  }

  const patternCount: Map<string, number> = new Map();

  // Step 2–4: Sort and extract sequences
  for (const [_, userRecords] of userMap) {
    userRecords.sort((a, b) => a.timestamp - b.timestamp);
    const movies = userRecords.map(r => r.movie);

    const seen = new Set<string>();
    for (let i = 0; i < movies.length - 2; i++) {
      for (let j = i + 1; j < movies.length - 1; j++) {
        for (let k = j + 1; k < movies.length; k++) {
          const pattern = [movies[i], movies[j], movies[k]].join("->");
          if (!seen.has(pattern)) {
            patternCount.set(pattern, (patternCount.get(pattern) || 0) + 1);
            seen.add(pattern);
          }
        }
      }
    }
  }

  // Step 5: Return the most common
  let maxCount = 0;
  let result = "";
  for (const [pattern, count] of patternCount) {
    if (count > maxCount) {
      maxCount = count;
      result = pattern;
    }
  }

  return result.split("->");
}

