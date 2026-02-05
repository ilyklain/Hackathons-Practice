# -------------------------------------
# ‣ Instagram Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# To maintain a safe environment, Instagram filters hashtags that 
# are associated with spam or prohibited content. Even subtle 
# variations (leetspeak) must be caught.
#
# » Problem:
# Write a Python function that checks if a list of hashtags are clean.
#
# The system should:
#   - Check a forbidden list: ["spam", "follow4follow", "scam"].
#   - Catch variations like "sp4m" or "sc4m".
#   - Return a list of 'flagged' hashtags.
# -------------------------------------

def check_hashtags(hashtags):
    forbidden = ["spam", "follow4follow", "scam", "bot"]
    flagged = []
    
    replacements = {'4': 'a', '0': 'o', '1': 'i', '3': 'e', '7': 't'}
    
    for tag in hashtags:
        # Normalize: remove # and lowercase
        normalized = tag.lower().replace("#", "")
        
        # Leetspeak translation
        temp = "".join([replacements.get(c, c) for c in normalized])
        
        if any(bad in temp for bad in forbidden):
            flagged.append(tag)
            
    return flagged

# Example Usage
user_tags = ["#Nature", "#sp4m", "#photo_of_the_day", "#Foll0w4Foll0w"]
print("--- Instagram Content Safety Filter ---")
detected = check_hashtags(user_tags)
print(f"Total checked: {len(user_tags)}")
print(f"Flagged tags: {detected}")
