/*
  -------------------------------------
  ‣ Uber Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Uber manages dynamic supply and demand. To optimize driver earnings, 
  the system identifies "High Demand Sectors" (Surge Pricing) by 
  analyzing ride requests in a geospatial grid.

  » Problem:
  Write a Go script that finds the "Hottest Sector" in a 2D coordinate grid.

  The system should:
    - Receive ride requests: {X, Y} coordinates (Integers 0-99)
    - Divide the 100x100 map into 10x10 sectors.
    - Count requests per sector.
    - Return the Sector ID (e.g., "5-3") with the most requests.

  » Example:
    Request at (52, 34) belongs to Sector "5-3".
    Request at (5, 9) belongs to Sector "0-0".

  » Objective:
  Optimize data processing using Go's efficient maps and loops.

  » Approach:
  - Normalize coordinates by dividing by 10.
  - Use a map where the key is a string "sectorX-sectorY".
  - Track the maximum count and winner ID.
*/

package main

import (
	"fmt"
)

type Request struct {
	X int
	Y int
}

func findHottestSector(requests []Request) (string, int) {
	sectorMap := make(map[string]int)
	maxRequests := 0
	hottestID := "None"

	for _, req := range requests {
		sectorX := req.X / 10
		sectorY := req.Y / 10
		key := fmt.Sprintf("%d-%d", sectorX, sectorY)

		sectorMap[key]++

		if sectorMap[key] > maxRequests {
			maxRequests = sectorMap[key]
			hottestID = key
		}
	}

	return hottestID, maxRequests
}

func main() {
	// Sample data
	data := []Request{
		{X: 52, Y: 34}, {X: 55, Y: 38}, {X: 59, Y: 31}, // Sector 5-3
		{X: 12, Y: 15}, {X: 18, Y: 11},                 // Sector 1-1
		{X: 5, Y: 5},                                   // Sector 0-0
	}

	fmt.Println("Uber Dynamic Surge Heatmap Monitor")
	fmt.Println("----------------------------------")

	sector, count := findHottestSector(data)
	fmt.Printf("Hottest Sector: %s with %d active requests.\n", sector, count)
}
