/*
  --------------------------
   Microsoft Hackathon Challenge
  --------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 08/03/2025

  » Problem:
  A smart city system needs to schedule charging for a fleet of electric vehicles (EVs).
  You are given:
    - A list of EVs, each with a required charge amount and a latest charging time (deadline).
    - A fixed number of charging slots (stations) available each time unit.

  » Objective:
  Determine if it's possible to schedule all required charges before their deadlines using the available slots each time unit.
  If possible, return a schedule mapping time slots to vehicles; otherwise, return failure.

  » Approach:
  Greedy scheduling based on earliest deadlines first (EDF). Use a min-heap or sort EVs
  by deadline, and assign them to the latest available slot before their deadline.
*/

package main

import (
	"container/heap"
	"fmt"
	"sort"
)

type EV struct {
	id       string
	charge   int
	deadline int
}
type MinHeap []EV

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i].deadline < h[j].deadline }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
	*h = append(*h, x.(EV))
}

func (h *MinHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func scheduleEVsAdvanced(evs []EV, slots int) (map[int][]string, bool) {
	if len(evs) == 0 || slots <= 0 {
		return nil, false
	}
	// Create a min-heap of EVs sorted by deadline
	h := &MinHeap{}
	heap.Init(h)
	for _, ev := range evs {
		heap.Push(h, ev)
	}

	// Map to store which EVs are scheduled at which time slot
	schedule := make(map[int][]string)
	usedSlots := make(map[int]int)

	for h.Len() > 0 {
		ev := heap.Pop(h).(EV)

		// Try to schedule this EV starting from its deadline going backwards
		assigned := false
		for t := ev.deadline; t >= 1; t-- {
			if usedSlots[t] < slots {
				schedule[t] = append(schedule[t], ev.id)
				usedSlots[t]++
				assigned = true
				break
			}
		}
		if !assigned {
			return nil, false
		}
	}

	return schedule, true
}

func main() {
	evs := []EV{
		{"EV-Alpha", 1, 4},
		{"EV-Beta", 1, 2},
		{"EV-Gamma", 1, 3},
		{"EV-Delta", 1, 1},
		{"EV-Epsilon", 1, 3},
	}
	slots := 2

	schedule, ok := scheduleEVsAdvanced(evs, slots)
	if !ok {
		fmt.Println("Cannot schedule all EVs within their deadlines.")
	} else {
		fmt.Println("Schedule computed successfully:")
		keys := make([]int, 0, len(schedule))
		for k := range schedule {
			keys = append(keys, k)
		}
		sort.Ints(keys)
		for _, t := range keys {
			fmt.Printf("Time %d: %v\n", t, schedule[t])
		}
	}
}

