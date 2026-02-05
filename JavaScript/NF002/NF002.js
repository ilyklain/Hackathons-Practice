/*
  -------------------------------------
  ‣ Netflix Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Netflix serves personalized content recommendations to millions of users. 
  To improve user retention, the system needs to identify "Trending Micro-clusters":
  groups of genres that are frequently watched together within a specific timeframe.

  » Problem:
  Write a script that processes user viewing history and identifies which 
  movie genre pairs are most commonly watched together (co-occurrence).
  
  The system should:
    - Parse a list of view events: { user_id, genres: [] }
    - Calculate the frequency of all possible genre pairs per user
    - Aggregate frequencies across all users
    - Return the top N most frequent genre pairs

  » Example:
    Views:
      { user: 1, genres: ["Sci-Fi", "Action", "Drama"] }
      { user: 2, genres: ["Action", "Sci-Fi"] }

    Output (Top 1):
      ("Action", "Sci-Fi") -> 2 global occurrences

  » Objective:
  Implement a data-driven solution to identify content synergies.

  » Approach:
  - Iterate through each user's viewing history
  - Generate unique combinations of 2 genres for each user
  - Use a Hash Map to track global pair frequencies
  - Sort the map by frequency and extract the top N results
*/

const getTrendingPairs = (viewingHistory, topN = 5) => {
    const pairFrequencies = {};

    viewingHistory.forEach((view) => {
        const genres = [...new Set(view.genres)].sort(); // Deduplicate and sort for consistency

        // Generate all unique pairs for this user
        for (let i = 0; i < genres.length; i++) {
            for (let j = i + 1; j < genres.length; j++) {
                const pair = `${genres[i]} & ${genres[j]}`;
                pairFrequencies[pair] = (pairFrequencies[pair] || 0) + 1;
            }
        }
    });

    // Convert to array, sort by frequency, and take top N
    return Object.entries(pairFrequencies)
        .map(([pair, count]) => ({ pair, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, topN);
};

// Example Usage
const history = [
    { user: "User_1", genres: ["Sci-Fi", "Action", "Drama", "Thriller"] },
    { user: "User_2", genres: ["Action", "Sci-Fi", "Adventure"] },
    { user: "User_3", genres: ["Drama", "Romance", "Thriller"] },
    { user: "User_4", genres: ["Sci-Fi", "Action", "Horror"] },
    { user: "User_5", genres: ["Action", "Adventure", "Sci-Fi"] },
];

console.log("--- Netflix Trending Genre Pair Analysis ---");
const topPairs = getTrendingPairs(history, 3);

topPairs.forEach((item, index) => {
    console.log(`${index + 1}. ${item.pair}: ${item.count} users`);
});
