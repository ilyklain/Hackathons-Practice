/*
  -------------------------------------
  ‣ Cloudflare Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Cloudflare operates at the edge of the internet, processing millions
  of requests per second. One common task is detecting traffic patterns
  to identify potential abuse or anomalies.

  In this challenge, you will analyze incoming request logs to determine
  the most frequent IP address within a rolling time window.

  » Problem:
  You are given a list of HTTP request logs. Each log contains:
    - ipAddress (string)
    - timestamp (integer, seconds)

  Implement a system that returns the IP address with the highest number
  of requests within a given time window (in seconds).

  If multiple IPs have the same count, return the lexicographically
  smallest IP.

  » Example:
    Logs:
      ("10.0.0.1", 1)
      ("10.0.0.2", 2)
      ("10.0.0.1", 3)
      ("10.0.0.1", 5)

    Window: 5 seconds

    Output:
      "10.0.0.1"

  » Objective:
  Efficiently process up to 10^6 logs and compute the most frequent IP
  in a sliding window.

  » Approach:
  - Sort logs by timestamp
  - Use a sliding window with two pointers
  - Maintain a frequency map for IP addresses
  - Track the maximum frequency dynamically
*/

package main

import (
	"fmt"
	"sort"
)

type Log struct {
	IP        string
	Timestamp int
}

func mostFrequentIP(logs []Log, window int) string {
	sort.Slice(logs, func(i, j int) bool {
		return logs[i].Timestamp < logs[j].Timestamp
	})

	freq := make(map[string]int)
	left := 0
	maxCount := 0
	result := ""

	for right := 0; right < len(logs); right++ {
		ip := logs[right].IP
		freq[ip]++

		for logs[right].Timestamp-logs[left].Timestamp > window {
			freq[logs[left].IP]--
			left++
		}

		if freq[ip] > maxCount || (freq[ip] == maxCount && ip < result) {
			maxCount = freq[ip]
			result = ip
		}
	}

	return result
}

func main() {
	logs := []Log{
		{"10.0.0.1", 1},
		{"10.0.0.2", 2},
		{"10.0.0.1", 3},
		{"10.0.0.1", 5},
		{"10.0.0.2", 6},
	}

	window := 5
	fmt.Println(mostFrequentIP(logs, window))
}