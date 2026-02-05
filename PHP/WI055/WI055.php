<?php
/*
  -------------------------------------
  ‣ Wikipedia Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Wikipedia handles massive documents. To help users find what 
  they need, the search engine must highlight occurrences of 
  keywords while ignoring case and handling multiple instances 
  efficiently.

  » Problem:
  Write a PHP function that counts and highlights keywords.

  The system should:
    - Receive a long `text` and a `keyword`.
    - Return the count of occurrences.
    - Return the text with the keywords wrapped in [brackets].

  » Objective:
  Practice case-insensitive string manipulation in PHP.
*/

function wikipedia_search_highlight(string $text, string $keyword): array
{
    $count = substr_count(strtolower($text), strtolower($keyword));

    // Use regex for case-insensitive replacement with brackets
    $highlighted = preg_replace("/($keyword)/i", "[$1]", $text);

    return [
        'count' => $count,
        'text' => $highlighted
    ];
}

// --- Example Usage ---
$article = "PHP is a popular general-purpose scripting language that is especially suited to web development. PHP was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993.";
$search = "PHP";

$result = wikipedia_search_highlight($article, $search);

echo "--- Wikipedia Keyword Highlighter ---\n";
echo "Search Term: '$search'\n";
echo "Occurrences: " . $result['count'] . "\n\n";
echo "Highlighted Text:\n" . $result['text'] . "\n";
