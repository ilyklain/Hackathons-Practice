/*
  -------------------------------------
  ‣ Oracle Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Database engines like Oracle must ensure ACID properties. 
  The "Atomicity" principle guarantees that a transaction is 
  either fully completed or not at all. If an error occurs 
  during a transfer, the system must "Rollback" to the previous state.

  » Problem:
  Write a Java program that simulates an Atomic Transaction.

  The system should:
    - Receive: senderBalance, receiverBalance, and transferAmount.
    - Attempt to deduct from sender and add to receiver.
    - If sender has insufficient funds, throw an exception.
    - If any step fails, return the original balances (Rollback).

  » Objective:
  Practice Exception handling and state consistency in Java.
*/

class TransactionException extends Exception {
    public TransactionException(string message) {
        super(message);
    }
}

public class OracleTransactionSimulator {
    public static void main(string[] args) {
        double accountA = 500.0;
        double accountB = 200.0;
        double amount = 600.0;

        System.out.println("--- Oracle ACID Transaction Monitor ---");
        System.out.println("Initial State: A=" + accountA + ", B=" + accountB);

        try {
            processTransfer(accountA, accountB, amount);
        } catch (TransactionException e) {
            System.out.println("ROLLBACK TRIGGERED: " + e.getMessage());
            System.out.println("Final State: A=" + accountA + ", B=" + accountB);
        }
    }

    public static void processTransfer(double from, double to, double amount) throws TransactionException {
        if (amount > from) {
            throw new TransactionException("Insufficient funds for atomic operation.");
        }
        
        // Simulating Atomicity: if we reach here, we assume success
        double newFrom = from - amount;
        double newTo = to + amount;
        
        System.out.println("COMMIT SUCCESSFUL: A=" + newFrom + ", B=" + newTo);
    }
}
