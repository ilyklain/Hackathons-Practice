<?php
/*
  -------------------------------------
  ‣ WordPress (Automattic) Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  WordPress powers over 40% of the web. One of its biggest 
  challenges is handling massive amounts of comment spam. 
  Automattic uses services like Akismet to filter these 
  automatically before they hit the database.

  » Problem:
  Write a PHP function that simulates a "Comment Shield" 
  plugin's filtering logic.

  The system should:
    - Receive comment data: [ 'author', 'email', 'content', 'ip' ]
    - Return true if the comment is flagged as SPAM, false otherwise.

  Rules for Spam:
    - Contains forbidden keywords: "casino", "buy now", "free gift".
    - Contains more than 2 HTTP/HTTPS links in the content.
    - Author name is longer than 50 characters (potential bot string).

  » Objective:
  Practice string manipulation, regular expressions, and 
  conditional logic in the context of a WordPress plugin.

  » Approach:
  - Use `strpos` or `preg_match` for keywords.
  - count links using `preg_match_all`.
  - Check string lengths.
*/

function wp_comment_shield_is_spam(array $comment, array $forbidden_words): bool
{
    $content = strtolower($comment['content']);
    $author = $comment['author'];

    // Rule 1: Forbidden keywords
    foreach ($forbidden_words as $word) {
        if (strpos($content, strtolower($word)) !== false) {
            return true;
        }
    }

    // Rule 2: Excessive links
    $link_pattern = '/https?:\/\/[^\s]+/';
    if (preg_match_all($link_pattern, $content, $matches) > 2) {
        return true;
    }

    // Rule 3: Oversized author name
    if (strlen($author) > 50) {
        return true;
    }

    return false;
}

// --- Example Usage ---
$bad_words = ["casino", "buy now", "free gift", "crypto"];

$comments = [
    [
        'author' => 'John Doe',
        'content' => 'Hey, nice post! Really enjoyed the tips on PHP.',
        'ip' => '192.168.1.1'
    ],
    [
        'author' => 'Bot_12345_Efficient_Marketing_Specialist_London_UK',
        'content' => 'Check this out!',
        'ip' => '10.0.0.5'
    ], // Spam: Author too long
    [
        'author' => 'Lucky winner',
        'content' => 'You won a free gift! Visit http://scam.com to claim.',
        'ip' => '172.16.0.4'
    ], // Spam: Forbidden word
    [
        'author' => 'Link Spammer',
        'content' => 'Visit: http://site1.com http://site2.com http://site3.com',
        'ip' => '8.8.8.8'
    ] // Spam: Too many links
];

echo "WordPress Comment Shield Anomaly Detector\n";
echo "-----------------------------------------\n";

foreach ($comments as $index => $c) {
    $is_spam = wp_comment_shield_is_spam($c, $bad_words);
    $status = $is_spam ? "[FLAGGED AS SPAM]" : "[CLEAN]";
    echo "Comment #" . ($index + 1) . " from {$c['author']}: $status\n";
}
