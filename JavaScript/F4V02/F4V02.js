/*
  -----------------------------------
  ‣ Stripe Hackathon Challenge
  -----------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Stripe processes millions of payment events per day. To ensure system
  reliability and detect abnormal behavior, engineers often analyze
  streams of transaction data in near real-time.

  In this challenge, you will build a lightweight transaction analyzer
  that detects the highest-spending customer within a given time window.

  » Problem:
  You are given a list of payment events. Each event contains:
    - customerId (string)
    - amount (integer, in cents)
    - timestamp (integer, seconds)

  Given a time window (in seconds), determine which customer spent the
  most money within that window.

  If multiple customers have the same total amount, return the
  lexicographically smallest customerId.

  » Example:
    Events:
      ("c1", 500, 1)
      ("c2", 700, 2)
      ("c1", 400, 4)
      ("c2", 200, 6)

    Window: 5 seconds

    Output:
      "c1"

  » Objective:
  Efficiently process up to 10^6 payment events and compute the
  top-spending customer in a rolling time window.

  » Approach:
  - Sort events by timestamp
  - Use a sliding window (two pointers)
  - Maintain a map of customerId -> totalAmount
  - Update the maximum spender dynamically
*/

class StripeTransactionAnalyzer {
    constructor() {
        this.events = [];
    }

    addEvent(customerId, amount, timestamp) {
        this.events.push({ customerId, amount, timestamp });
    }

    getTopSpender(window) {
        this.events.sort((a, b) => a.timestamp - b.timestamp);

        let left = 0;
        let maxAmount = 0;
        let result = "";

        for (let right = 0; right < this.events.length; right++) {
            const { customerId, amount, timestamp } = this.events[right];

            while (timestamp - this.events[left].timestamp > window) {
                left++;
            }

            const currentTotal = totals.get(customerId) || 0;
            totals.set(customerId, currentTotal + amount);

            if (currentTotal > maxAmount || (currentTotal === maxAmount && customerId < result)) {
                maxAmount = currentTotal;
                result = customerId;
            }
        }

        return result;
    }

}

// -----------------
// Example Usage
// -----------------

const analyzer = new StripeTransactionAnalyzer();

analyzer.addEvent("c1", 500, 1);
analyzer.addEvent("c2", 700, 2);
analyzer.addEvent("c1", 400, 4);
analyzer.addEvent("c2", 200, 6);

console.log(analyzer.getTopSpender(5)); // c1