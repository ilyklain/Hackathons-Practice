<?php
/*
  -------------------------------------
  ‣ Slack Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Slack displays relative timestamps (e.g., "5 minutes ago") to make 
  conversations feel real-time. The backend calculates the difference 
  between the current time and the message's creation time.

  » Problem:
  Write a PHP function that formats a Unix timestamp into a 
  relative string.

  The system should:
    - Receive a past Unix timestamp.
    - If < 60s, return "just now".
    - If < 60m, return "Xm ago".
    - If < 24h, return "Xh ago".
    - Else return "Long ago".

  » Objective:
  Practice time arithmetic and conditional formatting in PHP.
*/

function slack_relative_time(int $timestamp): string
{
    $diff = time() - $timestamp;

    if ($diff < 60) {
        return "just now";
    }

    if ($diff < 3600) {
        $mins = floor($diff / 60);
        return "{$mins}m ago";
    }

    if ($diff < 86400) {
        $hours = floor($diff / 3600);
        return "{$hours}h ago";
    }

    return "Long ago";
}

// --- Example Usage ---
echo "--- Slack Message Timestamp Formatter ---\n";
echo "60s ago: " . slack_relative_time(time() - 60) . "\n";
echo "10s ago: " . slack_relative_time(time() - 10) . "\n";
echo "2h ago:  " . slack_relative_time(time() - 7200) . "\n";
