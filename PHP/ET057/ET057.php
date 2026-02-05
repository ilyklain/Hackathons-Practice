<?php
/*
  -------------------------------------
  ‣ Etsy Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Etsy connects sellers and buyers globally. Each country has its 
  own Value Added Tax (VAT). The checkout system must calculate 
  and add the correct tax percentage based on the buyer's 
  location.

  » Problem:
  Write a PHP function that calculates the Final Total including VAT.

  The system should:
    - Receive: base_price and country_code.
    - Rates: US: 0%, UK: 20%, DE: 19%, FR: 20%.
    - Return: Total formatted to 2 decimals.

  » Objective:
  Practice lookup tables and financial calculation in PHP.
*/

function etsy_calculate_vat(float $price, string $country): string
{
    $vat_rates = [
        'US' => 0.0,
        'UK' => 0.20,
        'DE' => 0.19,
        'FR' => 0.20
    ];

    $rate = $vat_rates[strtoupper($country)] ?? 0.0;
    $total = $price * (1 + $rate);

    return number_format($total, 2);
}

// --- Example Usage ---
echo "--- Etsy International Tax Calculator ---\n";
echo "Item $100 in Germany: $" . etsy_calculate_vat(100.0, "DE") . "\n";
echo "Item $100 in UK:      $" . etsy_calculate_vat(100.0, "UK") . "\n";
echo "Item $50 in USA:      $" . etsy_calculate_vat(50.0, "US") . "\n";
