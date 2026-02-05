# -------------------------------------
# ‣ Netflix Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# Netflix limits account sharing by verifying if different devices 
# are in the same household. A basic check involves comparing the 
# IP address and the city of the current login vs the main household.
#
# » Problem:
# Write a Python function that flags potential sharing.
#
# The system should:
#   - Receive: household_data {ip, city} and current_login {ip, city}.
#   - If IP is different AND City is different, return "FLAGGED".
#   - If IP is different but City is same, return "HOUSEHOLD_MEMBER (Mobile)".
#   - Else return "AUTHORIZED".
# -------------------------------------

def verify_session(household, current):
    if household["ip"] == current["ip"]:
        return "AUTHORIZED"
        
    if household["city"] != current["city"]:
        return "FLAGGED"
        
    return "HOUSEHOLD_MEMBER (Mobile)"

# Example Usage
home = {"ip": "192.168.1.50", "city": "Madrid"}

logins = [
    {"ip": "192.168.1.50", "city": "Madrid"},      # Authorized
    {"ip": "100.200.5.10", "city": "Madrid"},      # Mobile Member
    {"ip": "5.5.5.5", "city": "Barcelona"}         # Flagged
]

print("--- Netflix Account Sharing Detector ---")
for idx, login in enumerate(logins):
    status = verify_session(home, login)
    print(f"Login {idx + 1}: {status}")
