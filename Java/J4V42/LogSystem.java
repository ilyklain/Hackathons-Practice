package Java.J4V42;
/* 
  -----------------------------
  ‣ Microsoft Hackathon Challenge
  -----------------------------

  Developed and Solved by: David AKA C0munidad
  Date: 08/03/2025

  » Problem:
  You're designing a distributed logging system.
  Each log entry is a string with a timestamp in the format "YYYY-MM-DD HH:MM:SS" 
  and a message. Log entries may arrive out of order. Your job is to:

    1. Store log entries in chronological order.
    2. Allow efficient range queries (get logs between two timestamps).
    3. Ensure insertions and queries are optimized for high volume.

  » Objective:
  Implement a `LogSystem` class with the following methods:
    - void insert(String timestamp, String message)
    - List<String> query(String startTimestamp, String endTimestamp)

  » Constraints:
  - You can assume up to 10^6 log entries.
  - Use appropriate data structures to ensure performance.
  
  » Approach:
  - Use TreeMap<String, List<String>> for sorted keys.
  - On insertion, append the message to the list under the timestamp key.
  - On query, use subMap to get the range efficiently.

*/

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;


public class LogSystem {

    private final TreeMap<String, List<String>> logs;

    public LogSystem() {
        logs = new TreeMap<>();
    }

    public void insert(String timestamp, String message) {
        logs.computeIfAbsent(timestamp, k -> new ArrayList<>()).add(message);
    }

    public List<String> query(String start, String end) {
        List<String> result = new ArrayList<>();
        for (Map.Entry<String, List<String>> entry : logs.subMap(start, true, end, true).entrySet()) {
            result.addAll(entry.getValue());
        }
        return result;
    }

    // Demo
    public static void main(String[] args) {
        LogSystem system = new LogSystem();
        system.insert("2025-08-03 14:00:00", "Server started");
        system.insert("2025-08-03 14:05:00", "User login");
        system.insert("2025-08-03 14:03:00", "Ping check");
        system.insert("2025-08-03 14:07:00", "Database error");

        List<String> logs = system.query("2025-08-03 14:00:00", "2025-08-03 14:06:00");
        System.out.println("Queried Logs:");
        logs.forEach(System.out::println);
    }
}


