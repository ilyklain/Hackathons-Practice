/*
  -------------------------------------
  ‣ Heroku Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Heroku manages millions of apps in isolated containers (Dynos). 
  The platform needs a high-performance "Heartbeat" checker that 
  instantly determines if a service is UP or DOWN based on a response 
  code and response time.

  » Problem:
  Write a Go program that evaluates a service's health.

  The system should:
    - Receive: responseCode (int) and responseTimeMs (int).
    - Status is UP if: 
        - responseCode is between 200 and 299.
        - responseTimeMs is less than 500ms.
    - Else Status is DOWN.

  » Objective:
  Practice logical operations and clear status reporting in Go.
*/

package main

import "fmt"

func checkHealth(code int, time int) string {
	if code >= 200 && code <= 299 && time < 500 {
		return "UP"
	}
	return "DOWN"
}

func main() {
	fmt.Println("Heroku Dyno Health Monitor")

	results := []struct {
		code int
		time int
	}{
		{200, 150},
		{404, 50},
		{201, 800},
		{500, 1000},
	}

	for _, res := range results {
		status := checkHealth(res.code, res.time)
		fmt.Printf("App [%d, %dms] -> %s\n", res.code, res.time, status)
	}
}
