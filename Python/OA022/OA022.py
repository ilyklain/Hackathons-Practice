# -------------------------------------
# ‣ OpenAI Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# LLMs (Large Language Models) process text in chunks called "Tokens". 
# OpenAI's API has strict rate limits based on "Tokens Per Minute" (TPM). 
# To avoid being rate-limited, we must estimate token usage before 
# sending requests.
#
# » Problem:
# Write a Python script that calculates the "Token Cost" of a conversation.
#
# The system should:
#   - Take a list of messages: [{"role": "user", "content": "hello"}]
#   - Rules:
#     1. Each message has a base cost of 4 tokens.
#     2. Every 4 characters in the 'content' count as 1 token (rounded up).
#     3. The role name adds its length in characters as tokens.
#     4. There is a fixed completion overhead of 3 tokens.
#
# » Example:
#   Message: {"role": "user", "content": "Help me"}
#   Base: 4
#   Role (user): 4 tokens
#   Content ("Help me" = 7 chars): ceil(7/4) = 2 tokens
#   Total: 4 + 4 + 2 = 10 tokens
#
# » Objective:
# Practice building estimation algorithms and handling list/dict structures.
#
# » Approach:
# - Iterate through the message list.
# - Apply the calculation rules to each message.
# - Sum all parts and add the constant overhead.
# -------------------------------------

import math

def estimate_token_usage(messages):
    total_tokens = 0
    
    # 3 tokens constant overhead for the final response generation
    COMPLETION_OVERHEAD = 3
    # Base tokens per message in the chat structure
    MESSAGE_BASE_COST = 4
    
    for msg in messages:
        role = msg.get("role", "")
        content = msg.get("content", "")
        
        # Rule 1 & 3: Base + Role Name length
        msg_tokens = MESSAGE_BASE_COST + len(role)
        
        # Rule 2: Content tokens (1 token per 4 characters, rounded up)
        content_tokens = math.ceil(len(content) / 4)
        
        msg_tokens += content_tokens
        total_tokens += msg_tokens
        
    return total_tokens + COMPLETION_OVERHEAD

# Example Usage
chat_history = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Explain quantum physics in one sentence."},
    {"role": "assistant", "content": "Quantum physics is the study of matter and energy at the most fundamental level."}
]

print("--- OpenAI Token Usage Estimator ---")
estimated_total = estimate_token_usage(chat_history)

print(f"Chat Messages: {len(chat_history)}")
print(f"Estimated Token Usage: {estimated_total} tokens")

# Mock limit check
TPM_LIMIT = 1000
if estimated_total > TPM_LIMIT:
    print("Warning: [LIMIT EXCEEDED] Request might be rejected by API.")
else:
    print("Status: [SAFE] Within rate limits.")
