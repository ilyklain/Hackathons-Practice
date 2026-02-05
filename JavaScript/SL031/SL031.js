/*
  -------------------------------------
  ‣ Slack Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Slack messages often contain "Mentions" (@user) and "Channels" 
  (#channel). The client-side parser must identify these tokens 
  to highlight them and make them clickable.

  » Problem:
  Write a JavaScript utility that extracts all mentions and channels 
  from a raw message string.

  The system should:
    - Identify words starting with @ as Mentions.
    - Identify words starting with # as Channels.
    - Clean up any trailing punctuation (like @user!).
    - Return an object with two arrays.

  » Objective:
  Practice Regex and string parsing in JavaScript.
*/

const parseSlackMessage = (message) => {
    const mentionRegex = /@(\w+)/g;
    const channelRegex = /#(\w+)/g;

    const mentions = (message.match(mentionRegex) || []).map(m => m.slice(1));
    const channels = (message.match(channelRegex) || []).map(c => c.slice(1));

    return { mentions, channels };
};

// Example Usage
const msg = "Hey @gustavo, check the updates in #engineering and #design!";
const result = parseSlackMessage(msg);

console.log("Slack Message Entity Extractor");
console.log(`Mentions: ${result.mentions.join(", ")}`);
console.log(`Channels: ${result.channels.join(", ")}`);
