/*
  -------------------------------------
  ‣ Rappi Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  RappiTurbo promises deliveries in under 10 minutes. This requires 
  an extremely efficient Logistics Engine to decide in real-time if 
  an order can fulfill the "Turbo" promise based on the courier's 
  distance, traffic conditions, and store prep time.

  » Problem:
  Write a Go program that calculates the "Turbo Eligibility" for 
  incoming orders.

  The system should:
    - Receive an order with: Store coordinates, User coordinates, 
      and Store prep time (minutes).
    - Assume the average courier speed is 20km/h.
    - Calculate the travel time (Distance / Speed).
    - An order is "TURBO_READY" if (Prep Time + Travel Time) <= 10 mins.

  » Example:
    Distance: 1.5 km
    Speed: 20 km/h -> Travel Time: 4.5 mins
    Prep Time: 3 mins
    Result: 7.5 mins (TURBO_READY)

  » Objective:
  Practice spatial distance calculations (Euclidean) and time 
  conversions in Go.

  » Approach:
  - Calculate distance using the Pythagorean theorem (simplified grid).
  - Convert speed to km/min.
  - Sum times and check against the 10-minute threshold.
*/

package main

import (
	"fmt"
	"math"
)

type Point struct {
	X float64
	Y float64
}

type Order struct {
	ID        string
	StoreLoc  Point
	UserLoc   Point
	PrepTime  float64 // in minutes
}

const AvgSpeedKmH = 20.0
const TurboLimit = 10.0

func calculateDistance(p1, p2 Point) float64 {
	return math.Sqrt(math.Pow(p2.X-p1.X, 2) + math.Pow(p2.Y-p1.Y, 2))
}

func isTurboEligible(order Order) (bool, float64) {
	distance := calculateDistance(order.StoreLoc, order.UserLoc)
	
	// Speed in km/min = 20 km / 60 min
	speedKmMin := AvgSpeedKmH / 60.0
	travelTime := distance / speedKmMin
	
	totalEstimatedTime := order.PrepTime + travelTime

	return totalEstimatedTime <= TurboLimit, totalEstimatedTime
}

func main() {
	orders := []Order{
		{ID: "ORD-001", StoreLoc: Point{0, 0}, UserLoc: Point{1.2, 0.5}, PrepTime: 3.0},
		{ID: "ORD-002", StoreLoc: Point{0, 0}, UserLoc: Point{3.0, 2.5}, PrepTime: 4.0},
		{ID: "ORD-003", StoreLoc: Point{1, 1}, UserLoc: Point{1.5, 1.2}, PrepTime: 2.0},
	}

	fmt.Println("RappiTurbo Delivery Optimizer")
	fmt.Printf("Speed Constant: %.1f km/h | Limit: %.1f mins\n\n", AvgSpeedKmH, TurboLimit)

	for _, o := range orders {
		eligible, eta := isTurboEligible(o)
		status := "STANDARD"
		if eligible {
			status = "TURBO_READY"
		}

		fmt.Printf("Order %s: ETA %.2f mins -> [%s]\n", o.ID, eta, status)
	}
}
