/*
  -------------------------------------
  ‣ Twitch Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Twitch streamers want to celebrate viewer milestones (e.g., every 
  1,000 new viewers). The system monitors the live count and 
  triggers an alert only when a specific threshold is crossed.

  » Problem:
  Write a JavaScript class that tracks viewer milestones.

  The system should:
    - Set a milestone interval (e.g., 1000).
    - Provide a method `updateCount(newCount)`.
    - Returns true if a NEW milestone was reached since the last update.

  » Objective:
  Practice stateful logic and floor division.
*/

class MilestoneTracker {
    constructor(interval) {
        this.interval = interval;
        this.lastMilestone = 0;
    }

    updateCount(count) {
        const currentMilestone = Math.floor(count / this.interval);
        if (currentMilestone > this.lastMilestone) {
            this.lastMilestone = currentMilestone;
            return true;
        }
        return false;
    }
}

// Example Usage
const tracker = new MilestoneTracker(1000);
const viewerUpdates = [800, 1200, 1900, 2100, 3050];

console.log("Twitch Milestone Alert System");
viewerUpdates.forEach(count => {
    const reached = tracker.updateCount(count);
    if (reached) {
        console.log(`Milestone Reached. Total Viewers: ${count}`);
    } else {
        console.log(`Count Update: ${count}`);
    }
});
