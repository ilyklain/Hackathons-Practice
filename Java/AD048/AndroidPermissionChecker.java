/*
  -------------------------------------
  ‣ Android (Google) Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Android apps must request permissions for sensitive data (Camera, 
  Location). Modern Android versions use a "Runtime Permission" 
  model where the app must check if a specific permission is 
  granted before executing a feature.

  » Problem:
  Write a Java function that simulates a permission checker.

  The system should:
    - Receive: grantedPermissions (List) and requiredPermission (String).
    - Return: "PERMISSION_GRANTED" or "PERMISSION_DENIED".

  » Objective:
  Practice simple lookup and string comparison in Java.
*/

import java.util.*;

public class AndroidPermissionChecker {
    public static void main(string[] args) {
        List<string> myAppPermissions = Arrays.asList("CAMERA", "INTERNET");
        
        System.out.println("--- Android Runtime Permission Simulator ---");
        System.out.println("Accessing GPS: " + check(myAppPermissions, "GPS"));
        System.out.println("Accessing CAMERA: " + check(myAppPermissions, "CAMERA"));
    }

    public static string check(List<string> granted, string required) {
        return granted.contains(required) ? "PERMISSION_GRANTED" : "PERMISSION_DENIED";
    }
}
