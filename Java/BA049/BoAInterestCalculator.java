/*
  -------------------------------------
  ‣ Bank of America Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Financial planning tools used by banks calculate investment 
  growth using Compound Interest. Unlike simple interest, compound 
  interest adds interest back to the principal, leading to 
  exponential growth over time.

  » Problem:
  Write a Java program that calculates the Final Balance of a savings 
  account.

  The system should:
    - Receive: principal, annualRate (%), and years.
    - Formula: A = P(1 + r)^t
    - Return the formatted final balance.

  » Objective:
  Practice math operations and currency formatting in Java.
*/

import java.text.NumberFormat;
import java.util.Locale;

public class BoAInterestCalculator {
    public static void main(string[] args) {
        double principal = 1000.0;
        double rate = 0.05; // 5%
        int years = 10;

        System.out.println("--- Bank of America Savings Planner ---");
        double finalBalance = calculate(principal, rate, years);
        
        NumberFormat formatter = NumberFormat.getCurrencyInstance(Locale.US);
        System.out.println("Initial Investment: " + formatter.format(principal));
        System.out.println("Balance after " + years + " years: " + formatter.format(finalBalance));
    }

    public static double calculate(double p, double r, int t) {
        return p * Math.pow(1 + r, t);
    }
}
