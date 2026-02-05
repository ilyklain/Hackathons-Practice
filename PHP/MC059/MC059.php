<?php
/*
  -------------------------------------
  ‣ Mailchimp Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Mailchimp helps businesses send marketing emails. Before 
  launching a campaign, the system must validate that the 
  audience list is healthy—meaning every entry has both 
  a name and a valid email address.

  » Problem:
  Write a PHP function that filters an audience list.

  The system should:
    - Receive an array of arrays: [ ['name' => '..', 'email' => '..'] ].
    - Return only the entries with non-empty fields.
    - Ensure 'email' contains an '@'.

  » Objective:
  Practice list filtering and validation logic in PHP.
*/

function mailchimp_validate_audience(array $list): array
{
    return array_filter($list, function ($entry) {
        $has_name = !empty(trim($entry['name'] ?? ''));
        $has_email = !empty(trim($entry['email'] ?? ''));
        $valid_format = strpos($entry['email'] ?? '', '@') !== false;

        return $has_name && $has_email && $valid_format;
    });
}

// --- Example Usage ---
$users = [
    ['name' => 'Gustavo', 'email' => 'g@example.com'],
    ['name' => 'Invalid', 'email' => 'not-an-email'],
    ['name' => ' ', 'email' => 'missing@name.com'],
    ['name' => 'Alice', 'email' => 'alice@work.com']
];

echo "Mailchimp Audience Validator\n";
$valid_users = mailchimp_validate_audience($users);
echo "Valid contacts found: " . count($valid_users) . "\n";
foreach ($valid_users as $u) {
    echo " > " . $u['name'] . "\n";
}
