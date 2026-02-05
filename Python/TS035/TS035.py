# -------------------------------------
# ‣ Tesla Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# Tesla's trip planner provides highly accurate range estimations 
# by considering speed, outside temperature, and elevation. 
# Efficiency drops significantly at high speeds due to air resistance.
#
# » Problem:
# Write a Python script that estimates the remaining range of a car.
#
# The system should:
#   - Receive: current_battery_kwh, avg_consumption_wh_km, speed_kmh.
#   - Adjustment: If speed > 110 kmh, increase consumption by 15%.
#   - Adjustment: If temperature < 5°C, increase consumption by 20%.
#   - Formula: Range = (Battery / AdjustedConsumption) * 1000
#
# » Objective:
# Practice conditional logic and physical modeling.
# -------------------------------------

def estimate_range(battery_kwh, consumption_wh_km, speed_kmh, temperature):
    adjusted_consumption = consumption_wh_km
    
    # Rule 1: High speed drag
    if speed_kmh > 110:
        adjusted_consumption *= 1.15
        
    # Rule 2: Cold weather battery efficiency
    if temperature < 5:
        adjusted_consumption *= 1.20
        
    # Range calculation (Convert kwh to wh)
    remaining_range = (battery_kwh * 1000) / adjusted_consumption
    
    return round(remaining_range, 2)

# Example Usage
battery = 75.0  # kWh (Tesla Model 3 Long Range)
consumption = 150 # Wh/km (Standard)
speed = 120 # km/h (Highway)
temp = 2 # Celsius (Winter)

print("--- Tesla Smart Range Estimator ---")
range_km = estimate_range(battery, consumption, speed, temp)
print(f"Projected Range: {range_km} km")
