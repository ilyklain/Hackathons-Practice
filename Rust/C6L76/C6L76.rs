/*
  -------------------------------------
  ‣ Cloudflare Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 09/10/2025

  » Context:
  Cloudflare operates at the edge of the internet, handling millions of
  requests per second. To protect services from abuse, rate limiting is
  a critical component of the infrastructure.

  In this challenge, you will implement a lightweight rate limiter that
  detects which IP addresses exceed a maximum number of requests within
  a given rolling time window.

  » Problem:
  You are given a list of HTTP request logs. Each log contains:
    - ip (String)
    - timestamp (i64, seconds)

  Given:
    - a time window (in seconds)
    - a maximum allowed number of requests

  Determine which IPs exceeded the allowed request limit within
  any rolling time window.

  » Example:
    Logs:
      ("10.0.0.1", 1)
      ("10.0.0.1", 2)
      ("10.0.0.1", 3)
      ("10.0.0.2", 4)
      ("10.0.0.1", 6)

    Window: 5 seconds
    Limit: 3

    Output:
      ["10.0.0.1"]

  » Objective:
  Build an efficient, memory-safe solution capable of processing
  large volumes of traffic data.

  » Approach:
  - Sort logs by timestamp
  - Group timestamps per IP
  - Use a sliding window per IP
  - Check if requests exceed the limit
*/

use std::collections::HashMap;

#[derive(Debug)]
struct Log {
    ip: String,
    timestamp: i64,
}

fn detect_rate_limit_violations(
    logs: Vec<Log>,
    window: i64,
    limit: usize,
) -> Vec<String> {
    let mut ip_map: HashMap<String, Vec<i64>> = HashMap::new();

    // Group timestamps by IP
    for log in logs {
        ip_map
            .entry(log.ip)
            .or_insert_with(Vec::new)
            .push(log.timestamp);
    }

    let mut violators = Vec::new();

    // Check each IP independently
    for (ip, mut timestamps) in ip_map {
        timestamps.sort();

        let mut left = 0;
        for right in 0..timestamps.len() {
            while timestamps[right] - timestamps[left] > window {
                left += 1;
            }

            if right - left + 1 > limit {
                violators.push(ip);
                break;
            }
        }
    }

    violators.sort();
    violators
}

fn main() {
    let logs = vec![
        Log {
            ip: "10.0.0.1".to_string(),
            timestamp: 1,
        },
        Log {
            ip: "10.0.0.1".to_string(),
            timestamp: 2,
        },
        Log {
            ip: "10.0.0.1".to_string(),
            timestamp: 3,
        },
        Log {
            ip: "10.0.0.2".to_string(),
            timestamp: 4,
        },
        Log {
            ip: "10.0.0.1".to_string(),
            timestamp: 6,
        },
    ];

    let window = 5;
    let limit = 3;

    let violators = detect_rate_limit_violations(logs, window, limit);
    println!("{:?}", violators);
}