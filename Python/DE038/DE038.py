# -------------------------------------
# ‣ OpenAI (DALL-E) Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# DALL-E produces better images when prompts are structured with 
# specific attributes like 'Subject', 'Style', and 'Lighting'.
#
# » Problem:
# Write a Python function that generates a random structured prompt.
#
# The system should:
#   - Select one random item from Subject, Style, and Lighting lists.
#   - Combine them: "A [Subject] in a [Style] style with [Lighting] lighting."
# -------------------------------------

import random

def generate_image_prompt():
    subjects = ["Cyberpunk City", "Floating Forest", "Ancient Robot"]
    styles = ["Oil Painting", "Hyper-realistic", "Pixel Art"]
    lightings = ["Golden Hour", "Neon Lights", "Cinematic"]
    
    s = random.choice(subjects)
    st = random.choice(styles)
    l = random.choice(lightings)
    
    return f"A {s} in a {st} style with {l} lighting."

# Example Usage
print("--- DALL-E Prompt Engineering Tool ---")
for _ in range(3):
    print(f"Generated: {generate_image_prompt()}")
