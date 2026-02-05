# -------------------------------------
# ‣ SpaceX Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# SpaceX's Starlink constellation requires precise orbital maneuvers. 
# To avoid collisions, we must monitor the "Minimum Separation Distance" 
# between multiple satellites in a specific sector.
#
# » Problem:
# Write a program that calculates the closest distance between any 
# two satellites in a 3D coordinate system.
#
# The system should:
#   - Receive a list of satellite positions: (id, x, y, z)
#   - Calculate the Euclidean distance between all possible pairs
#   - Identify the two satellites that are closest to each other
#   - Trigger a "Collision Warning" if the distance is below a safety threshold
#
# » Example:
#   Satellites:
#     S1: (0, 0, 0)
#     S2: (1, 1, 1)
#     S3: (0.1, 0, 0)
#
#   Threshold: 0.5
#   Output: Warning! S1 and S3 are too close (Distance: 0.1)
#
# » Objective:
# Ensure orbital safety through efficient spatial calculations.
#
# » Approach:
# - Implement the 3D distance formula: sqrt((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2)
# - Perform a nested loop to compare every satellite with every other satellite
# - Keep track of the minimum distance found
# - Output results with relevant warnings

import math

def monitor_satellites(satellites, safety_threshold=1.0):
    min_dist = float('inf')
    closest_pair = (None, None)

    num_sats = len(satellites)
    
    for i in range(num_sats):
        for j in range(i + 1, num_sats):
            s1 = satellites[i]
            s2 = satellites[j]
            
            # Distance formula in 3D
            dist = math.sqrt(
                (s1['pos'][0] - s2['pos'][0])**2 +
                (s1['pos'][1] - s2['pos'][1])**2 +
                (s1['pos'][2] - s2['pos'][2])**2
            )
            
            if dist < min_dist:
                min_dist = dist
                closest_pair = (s1['id'], s2['id'])

    print(f"--- SpaceX Orbital Safety Monitor ---")
    print(f"Analysis complete for {num_sats} satellites.")
    print(f"Closest pair: {closest_pair[0]} & {closest_pair[1]}")
    print(f"Distance: {min_dist:.4f} units")

    if min_dist < safety_threshold:
        print(f"DEBUG ALERT: [COLLISION WARNING] Below threshold of {safety_threshold}!")
    else:
        print("Status: [ALL SYSTEMS CLEAR]")

# Example Usage
starlink_fleet = [
    {"id": "STARLINK-A1", "pos": (105.4, 202.1, 445.0)},
    {"id": "STARLINK-B2", "pos": (105.5, 202.2, 445.1)}, # Very close to A1
    {"id": "STARLINK-C3", "pos": (500.0, 100.0, 200.0)},
    {"id": "STARLINK-D4", "pos": (10.0, 45.0, 99.0)},
]

if __name__ == "__main__":
    monitor_satellites(starlink_fleet, safety_threshold=1.5)
