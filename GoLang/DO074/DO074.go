/*
  -------------------------------------
  ‣ DigitalOcean Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  DigitalOcean allows users to "Tag" their Droplets (Virtual 
  Machines) for easier organization (e.g., #production, #database). 
  A common task is generating a "Combined Tag" string to display 
  on a dashboard from a list of separate tags.

  » Problem:
  Write a Go function that joins a list of tags.

  The system should:
    - Receive: []string of tags.
    - Join them with a comma and a space: "TagA, TagB".
    - If list is empty, return "UNCATEGORIZED".

  » Objective:
  Practice collection joining and edge-case handling in Go.
*/

package main

import (
	"fmt"
	"strings"
)

func generateSummary(tags []string) string {
	if len(tags) == 0 {
		return "UNCATEGORIZED"
	}
	return strings.Join(tags, ", ")
}

func main() {
	droplets := [][]string{
		{"Production", "Web"},
		{"Database"},
		{},
	}

	fmt.Println("DigitalOcean Droplet Tag Manager")
	for i, t := range droplets {
		fmt.Printf("Droplet #%d Status: %s\n", i+1, generateSummary(t))
	}
}
