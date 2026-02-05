/*
  -------------------------------------
  ‣ Docker Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Docker images are often named using human-readable strings. 
  To ensure compatibility with registry protocols and command-line 
  interfaces, image names must be standardized (all lowercase and 
  using hyphens instead of spaces).

  » Problem:
  Write a Go utility that cleans and standardizes image names.

  The system should:
    - Receive: dirtyName (String).
    - Convert to lowercase.
    - Replace spaces with hyphens.
    - Trim leading/trailing whitespace.

  » Objective:
  Practice string processing and standard library usage in Go.
*/

package main

import (
	"fmt"
	"strings"
)

func sanitizeImageName(raw string) string {
	clean := strings.TrimSpace(raw)
	clean = strings.ToLower(clean)
	clean = strings.ReplaceAll(clean, " ", "-")
	return clean
}

func main() {
	samples := []string{
		" My First App ",
		"Go microservice V2",
		" KUBERNETES MASTER ",
	}

	fmt.Println("Docker Image Naming Standardizer")
	for _, s := range samples {
		fmt.Printf("'%s' -> %s\n", s, sanitizeImageName(s))
	}
}
