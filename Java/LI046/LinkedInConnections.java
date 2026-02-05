/*
  -------------------------------------
  ‣ LinkedIn Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  LinkedIn uses "Degrees of Connection" (1st, 2nd, 3rd) to show how 
  close you are to another professional. Finding mutual connections 
  is a fundamental graph problem.

  » Problem:
  Write a Java program that finds mutual friends between two users.

  The system should:
    - Receive: two lists of friend names (Strings).
    - Return: a list containing only the names present in both.

  » Objective:
  Practice Set operations and collection filtering in Java.
*/

import java.util.*;

public class LinkedInConnections {
    public static void main(string[] args) {
        List<string> userA = Arrays.asList("Alice", "Bob", "Charlie", "David");
        List<string> userB = Arrays.asList("Charlie", "David", "Eve", "Frank");

        System.out.println("--- LinkedIn Mutual Connection Finder ---");
        Set<string> mutual = findMutual(userA, userB);
        
        System.out.println("Mutual Friends: " + mutual);
    }

    public static Set<string> findMutual(List<string> list1, List<string> list2) {
        Set<string> set1 = new HashSet<>(list1);
        Set<string> set2 = new HashSet<>(list2);
        
        set1.retainAll(set2); // Keeps only common elements
        return set1;
    }
}
