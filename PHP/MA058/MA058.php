<?php
/*
  -------------------------------------
  ‣ Magento Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Magento (Adobe Commerce) manages internal SKUs (Stock Keeping Unit). 
  When importing products, a system must generate unique SKUs by 
  appending a sequential number to a category prefix.

  » Problem:
  Write a PHP function that generates a batch of SKUs.

  The system should:
    - Receive: prefix, starting_index, and count.
    - Format: {PREFIX}-{000Index} (pad to 3 zeros).
    - Return: Array of SKUs.

  » Objective:
  Practice string padding and array generation in PHP.
*/

function magento_generate_skus(string $prefix, int $start, int $count): array
{
    $skus = [];
    for ($i = 0; $i < $count; $i++) {
        $index = $start + $i;
        $padded = str_pad($index, 3, "0", STR_PAD_LEFT);
        $skus[] = strtoupper($prefix) . "-" . $padded;
    }
    return $skus;
}

// --- Example Usage ---
echo "--- Magento Bulk SKU Generator ---\n";
$new_skus = magento_generate_skus("shirt", 5, 3);
print_r($new_skus);
