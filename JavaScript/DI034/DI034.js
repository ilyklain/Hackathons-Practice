/*
  -------------------------------------
  ‣ Discord Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Discord Webhooks allow external services to send messages. 
  To prevent "Malformatted Requests", we must validate that 
  the message body contains at least one of the required 
  fields: `content` or `embeds`.

  » Problem:
  Write a JavaScript function that validates a Webhook payload.

  The system should:
    - Check if 'content' exists and is a non-empty string.
    - Check if 'embeds' exists as a non-empty array.
    - Return true if either condition is met, false otherwise.

  » Objective:
  Practice data validation and type checking in JS.
*/

const isValidWebhook = (payload) => {
    const hasContent = typeof payload.content === "string" && payload.content.trim().length > 0;
    const hasEmbeds = Array.isArray(payload.embeds) && payload.embeds.length > 0;

    return hasContent || hasEmbeds;
};

// Example Usage
const payloads = [
    { content: "Hello World" },
    { embeds: [{ title: "Update" }] },
    { username: "Bot" }, // Invalid
    { content: " ", embeds: [] } // Invalid
];

console.log("Discord Webhook Payload Validator");
payloads.forEach((p, i) => {
    console.log(`Payload ${i + 1}: ${isValidWebhook(p) ? "VALID" : "INVALID"}`);
});
