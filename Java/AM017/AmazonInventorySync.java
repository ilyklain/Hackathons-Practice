package Java.AM017;

/*
  -------------------------------------
  ‣ Amazon Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Amazon's inventory system handles millions of updates. When multiple 
  warehouses update the stock levels of the same product, we must 
  ensure "Final Consistency" using a Conflict-free Replicated 
  Data Type (CRDT) approach.

  » Problem:
  Write a Java program that implements a "G-Counter" (Grow-only Counter).

  The system should:
    - Track counts from multiple "nodes" (warehouses).
    - Provide an `increment(nodeId, amount)` function.
    - Provide a `merge(otherCounter)` function that takes the maximum 
      count per node from both counters.
    - Provide a `getValue()` function that returns the sum of all nodes.

  » Example:
    Counter A: {Node1: 5, Node2: 2}
    Counter B: {Node1: 3, Node2: 10}
    Merge(A, B) -> {Node1: 5, Node2: 10} -> Total: 15

  » Objective:
  Practice distributed systems logic and Map manipulation in Java.

  » Approach:
  - Use a `HashMap<String, Integer>` to store counts.
  - In `merge`, iterate through the other map and update local values with `Math.max`.
*/

import java.util.HashMap;
import java.util.Map;

class GCounter {
    private final Map<String, Integer> counts = new HashMap<>();

    public void increment(String nodeId, int amount) {
        if (amount < 0) throw new IllegalArgumentException("Amount must be positive");
        counts.put(nodeId, counts.getOrDefault(nodeId, 0) + amount);
    }

    public void merge(GCounter other) {
        for (Map.Entry<String, Integer> entry : other.counts.entrySet()) {
            String nodeId = entry.getKey();
            int otherVal = entry.getValue();
            counts.put(nodeId, Math.max(counts.getOrDefault(nodeId, 0), otherVal));
        }
    }

    public int getValue() {
        return counts.values().stream().mapToInt(Integer::intValue).sum();
    }

    @Override
    public String toString() {
        return counts.toString() + " | Total: " + getValue();
    }
}

public class AmazonInventorySync {
    public static void main(String[] args) {
        System.out.println("Amazon Distributed Inventory Sync");

        GCounter warehouseA = new GCounter();
        warehouseA.increment("NYC-01", 10);
        warehouseA.increment("LAX-02", 5);

        GCounter warehouseB = new GCounter();
        warehouseB.increment("NYC-01", 8);
        warehouseB.increment("LAX-02", 12);
        warehouseB.increment("CHI-03", 7);

        System.out.println("Warehouse A State: " + warehouseA);
        System.out.println("Warehouse B State: " + warehouseB);

        warehouseA.merge(warehouseB);
        System.out.println("Merged State (Final Consistency): " + warehouseA);
    }
}
