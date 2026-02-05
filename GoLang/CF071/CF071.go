/*
  -------------------------------------
  ‣ Cloudflare Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Cloudflare protects websites from malicious traffic. One basic 
  defense is "Rate Limiting", which ensures a single IP address 
  doesn't send too many requests within a 1-second window, 
  preventing potential DDoS or brute-force attacks.

  » Problem:
  Write a Go program to monitor request counts per IP.

  The system should:
    - Use a map to track IP -> RequestCount.
    - Receive an IP string and current timestamp.
    - If Count > 5, flag as "BLOCKED".
    - Else, increment and return "ALLOWED".

  » Objective:
  Practice map management and simple security logic in Go.
*/

package main

import "fmt"

type RateLimiter struct {
	counts map[string]int
}

func (rl *RateLimiter) Request(ip string) string {
	rl.counts[ip]++
	if rl.counts[ip] > 5 {
		return "BLOCKED"
	}
	return "ALLOWED"
}

func main() {
	fmt.Println("Cloudflare Rate Limiting Shield")
	
	rl := RateLimiter{counts: make(map[string]int)}
	testIP := "192.168.1.1"

	for i := 1; i <= 7; i++ {
		status := rl.Request(testIP)
		fmt.Printf("Request %d from %s: %s\n", i, testIP, status)
	}
}
