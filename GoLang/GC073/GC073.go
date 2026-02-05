/*
  -------------------------------------
  ‣ Google Cloud (GCP) Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  GCP's "Cloud Storage" charges users based on the volume of data 
  stored (measured in GBs). Calculating the monthly bill accurately 
  is critical for both the cloud provider and the customer's 
  budget management.

  » Problem:
  Write a Go function that calculates the monthly storage cost.

  The system should:
    - Receive: totalBytes (int64).
    - Rate: $0.02 USD per GB.
    - Definition: 1 GB = 1,000,000,000 Bytes.
    - Return: Formatted cost string (e.g., "$5.20").

  » Objective:
  Practice large number handling and precision math in Go.
*/

package main

import "fmt"

const ratePerGB = 0.02
const bytesInGB = 1000000000.0

func calculateStorageCost(bytes int64) string {
	gbs := float64(bytes) / bytesInGB
	cost := gbs * ratePerGB
	return fmt.Sprintf("$%.2f", cost)
}

func main() {
	usage := []int64{
		500000000,   // 0.5 GB
		2000000000,  // 2.0 GB
		85400000000, // ~85.4 GB
	}

	fmt.Println("GCP Storage Cost Estimator")
	for _, bytes := range usage {
		fmt.Printf("Usage: %d bytes -> Cost: %s\n", bytes, calculateStorageCost(bytes))
	}
}
