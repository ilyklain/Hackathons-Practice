/*
  -------------------------------------
  ‣ GitHub Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  GitHub's "Insights" tool calculates a repository's health based on 
  community engagement. A healthy repo reflects active maintenance 
  and a high ratio of resolved issues.

  » Problem:
  Write a TypeScript function that calculates a Repo Health Score.

  The system should:
    - Receive: stars (count), openIssues (count), forkCount (count).
    - Formula: 
        Base = (stars * 10) + (forkCount * 5)
        Penalty = openIssues * 2
        Score = Base - Penalty
    - Score is clamped between 0 and 1000.

  » Objective:
  Practice data processing and clamping logic in TypeScript.
*/

interface RepoStats {
    stars: number;
    forks: number;
    openIssues: number;
}

function calculateHealthScore(stats: RepoStats): number {
    const base = (stats.stars * 10) + (stats.forks * 5);
    const penalty = stats.openIssues * 2;

    let score = base - penalty;

    // Clamp between 0 and 1000
    return Math.max(0, Math.min(1000, score));
}

// --- Example Usage ---
const myRepo = { stars: 85, forks: 20, openIssues: 10 };

console.log("--- GitHub Repository Health Insights ---");
console.log(`Stats: ${JSON.stringify(myRepo)}`);
console.log(`Score: ${calculateHealthScore(myRepo)}/1000`);
