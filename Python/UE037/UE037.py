# -------------------------------------
# ‣ Uber Eats Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# During peak hours or rain, Uber Eats applies "Surge Pricing" 
# to balance supply and demand. This increases the base delivery 
# fee to attract more couriers.
#
# » Problem:
# Write a Python function to calculate the delivery fee.
#
# The system should:
#   - Base Fee: $2.50.
#   - Rain Modifier: +$1.50.
#   - High Demand Modifier: * 1.5.
#   - Return the total fee formatted as currency.
# -------------------------------------

def calculate_delivery_fee(is_raining, demand_level):
    # demand_level: 0 (Low), 1 (Normal), 2 (High)
    base = 2.50
    
    if is_raining:
        base += 1.50
        
    if demand_level == 2:
        base *= 1.5
        
    return f"${base:.2f}"

# Example Usage
print("--- Uber Eats Dynamic Pricing Calculator ---")
print(f"Sunny, Low Demand: {calculate_delivery_fee(False, 0)}")
print(f"Raining, High Demand: {calculate_delivery_fee(True, 2)}")
