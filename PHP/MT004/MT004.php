<?php
/*
  -------------------------------------
  ‣ Meta Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Facebook's social graph is massive. Detecting "Mutual Connection
  Anomalies" is vital to identifying bot networks or clusters of
  fake accounts that connect to the same group of real users.

  » Problem:
  Write a script that identifies "Highly Connected Hubs" between
  two sets of users (e.g., potential bots and real accounts).

  Given:
    - An array of connections: [ ['from' => 'user_a', 'to' => 'user_b'], ... ]
    - A threshold (X) for minimum shared connections

  Identify pairs of users from the 'from' set who share more than
  X mutual connections in the 'to' set.

  » Example:
    Connections:
      Bot_1 -> Real_A
      Bot_1 -> Real_B
      Bot_2 -> Real_A
      Bot_2 -> Real_B

    Threshold: 1
    Output:
      Bot_1 and Bot_2 share 2 connections (Real_A, Real_B)

  » Objective:
  Implement an efficient lookup system to detect patterns in
  bipartite graphs.

  » Approach:
  - Create an adjacency list (who does each 'from' user follow?)
  - Compare every pair of 'from' users
  - Use array_intersect to find mutual 'to' users
  - Filter results by the threshold
*/

function detectConnectionAnomalies(array $connections, int $threshold)
{
    $adjList = [];

    // Build adjacency list
    foreach ($connections as $conn) {
        $from = $conn['from'];
        $to = $conn['to'];
        if (!isset($adjList[$from])) {
            $adjList[$from] = [];
        }
        $adjList[$from][] = $to;
    }

    $users = array_keys($adjList);
    $anomalies = [];

    // Compare pairs of 'from' users
    for ($i = 0; $i < count($users); $i++) {
        for ($j = $i + 1; $j < count($users); $j++) {
            $u1 = $users[$i];
            $u2 = $users[$j];

            $mutual = array_intersect($adjList[$u1], $adjList[$u2]);
            $count = count($mutual);

            if ($count > $threshold) {
                $anomalies[] = [
                    'pair' => "$u1 & $u2",
                    'count' => $count,
                    'mutual_connections' => array_values($mutual)
                ];
            }
        }
    }

    return $anomalies;
}

// Example Usage
$networkLogs = [
    ['from' => 'Bot_X', 'to' => 'User_Alpha'],
    ['from' => 'Bot_X', 'to' => 'User_Beta'],
    ['from' => 'Bot_X', 'to' => 'User_Gamma'],
    ['from' => 'Bot_Y', 'to' => 'User_Alpha'],
    ['from' => 'Bot_Y', 'to' => 'User_Beta'],
    ['from' => 'User_Normal', 'to' => 'User_Gamma'],
    ['from' => 'Bot_Z', 'to' => 'User_Alpha'],
    ['from' => 'Bot_Z', 'to' => 'User_Beta'],
];

echo "Meta Social Graph Anomaly Detector\n";
$results = detectConnectionAnomalies($networkLogs, 1);

if (empty($results)) {
    echo "No anomalies detected.\n";
} else {
    foreach ($results as $anomaly) {
        echo "ALERT: {$anomaly['pair']} share {$anomaly['count']} mutual connections.\n";
        echo "Targets: " . implode(', ', $anomaly['mutual_connections']) . "\n\n";
    }
}
