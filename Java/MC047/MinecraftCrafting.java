/*
  -------------------------------------
  ‣ Minecraft (Microsoft) Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  In Minecraft, crafing items requires specific recipes (e.g., 3 Planks 
  = 1 Door). The system must check if a player's inventory contains 
  the necessary materials before allowing the craft.

  » Problem:
  Write a Java program that validates a crafting recipe.

  The system should:
    - Receive: inventory (Map of Material -> Count).
    - Receive: recipe (Map of Material -> Count).
    - Return: true if inventory has enough of every material.

  » Objective:
  Practice Map iteration and inventory management logic in Java.
*/

import java.util.*;

public class MinecraftCrafting {
    public static void main(string[] args) {
        Map<string, Integer> inventory = new HashMap<>();
        inventory.put("Wood", 10);
        inventory.put("Iron", 2);

        Map<string, Integer> recipe = new HashMap<>();
        recipe.put("Wood", 3);
        recipe.put("Stick", 2);

        System.out.println("--- Minecraft Crafting Logic ---");
        boolean canCraft = checkRecipe(inventory, recipe);
        System.out.println("Can Craft Item? " + (canCraft ? "YES" : "NO (Missing Materials)"));
    }

    public static boolean checkRecipe(Map<string, Integer> inv, Map<string, Integer> req) {
        for (Map.Entry<string, Integer> entry : req.entrySet()) {
            string material = entry.getKey();
            int needed = entry.getValue();
            
            if (inv.getOrDefault(material, 0) < needed) {
                return false;
            }
        }
        return true;
    }
}
