/*
  -------------------------------------
  ‣ Cash App (Block) Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Cash App processes millions of peer-to-peer (P2P) transactions 
  daily. To maintain trust and security, the backend must validate 
  sufficient funds and detect potential fraudulent activity in 
  milliseconds before finalizing any transfer.

  » Problem:
  Write a C# program that implements a P2P Transaction Engine.

  The system should:
    - Receive a transaction request: { SenderId, ReceiverId, Amount }.
    - Check if the sender has enough balance.
    - Apply a "Fraud Guard" logic:
        - Transfers over $5,000 are flagged as "PENDING_REVIEW".
        - Transfers of exactly the same amount to the same receiver 
          within a short timeframe are flagged as "DUPLICATE_POTENTIAL".
    - Update balances for both parties upon success.

  » Example:
    Sender A ($100) -> Receiver B ($0), Amount: $50
    Result: SUCCESS | A Balance: $50, B Balance: $50

    Amount: $10,000
    Result: PENDING_REVIEW (High Value)

  » Objective:
  Practice data integrity, basic fraud detection patterns, and 
  state management in C#.

  » Approach:
  - Use a Dictionary to simulate the Account database.
  - Implement a `ProcessTransfer` method with validation rules.
  - Return a detailed Status object for each transaction.
*/

using System;
using System.Collections.Generic;

namespace CashAppSimulation
{
    public enum TransactionStatus { SUCCESS, INSUFFICIENT_FUNDS, PENDING_REVIEW, DUPLICATE_POTENTIAL }

    public class TransactionResult
    {
        public TransactionStatus Status { get; set; }
        public string Message { get; set; }
    }

    public class Account
    {
        public string Id { get; set; }
        public decimal Balance { get; set; }
    }

    public class TransactionEngine
    {
        private readonly Dictionary<string, Account> _accounts = new Dictionary<string, Account>();
        private string _lastReceiver = "";
        private decimal _lastAmount = 0;

        public void AddAccount(string id, decimal balance)
        {
            _accounts[id] = new Account { Id = id, Balance = balance };
        }

        public TransactionResult Transfer(string senderId, string receiverId, decimal amount)
        {
            if (!_accounts.ContainsKey(senderId) || !_accounts.ContainsKey(receiverId))
                return new TransactionResult { Status = TransactionStatus.INSUFFICIENT_FUNDS, Message = "Invalid Account" };

            var sender = _accounts[senderId];
            var receiver = _accounts[receiverId];

            // Rule 1: Funds Check
            if (sender.Balance < amount)
                return new TransactionResult { Status = TransactionStatus.INSUFFICIENT_FUNDS, Message = "Insufficient funds for transfer." };

            // Rule 2: High Value Fraud Guard
            if (amount > 5000)
                return new TransactionResult { Status = TransactionStatus.PENDING_REVIEW, Message = "Transaction exceeds limit and requires manual review." };

            // Rule 3: Sequential Duplicate Check
            if (receiverId == _lastReceiver && amount == _lastAmount)
                return new TransactionResult { Status = TransactionStatus.DUPLICATE_POTENTIAL, Message = "Multiple identical transfers detected." };

            // Apply Transfer
            sender.Balance -= amount;
            receiver.Balance += amount;

            // Update state for duplicate detection
            _lastReceiver = receiverId;
            _lastAmount = amount;

            return new TransactionResult { Status = TransactionStatus.SUCCESS, Message = $"Successfully transferred ${amount} to {receiverId}." };
        }

        public decimal GetBalance(string id) => _accounts.ContainsKey(id) ? _accounts[id].Balance : 0;
    }

    class Program
    {
        static void Main()
        {
            var engine = new TransactionEngine();
            engine.AddAccount("User_A", 1000);
            engine.AddAccount("User_B", 200);

            Console.WriteLine("--- Cash App P2P Transaction Monitor ---");
            Console.WriteLine($"User_A Initial Balance: {engine.GetBalance("User_A")}");

            // Test 1: Success
            var res1 = engine.Transfer("User_A", "User_B", 150);
            Console.WriteLine($"T1: {res1.Status} - {res1.Message}");

            // Test 2: Fraud - High Value
            var res2 = engine.Transfer("User_A", "User_B", 6000);
            Console.WriteLine($"T2: {res2.Status} - {res2.Message}");

            // Test 3: Duplicate detection
            engine.Transfer("User_A", "User_B", 10);
            var res3 = engine.Transfer("User_A", "User_B", 10);
            Console.WriteLine($"T3: {res3.Status} - {res3.Message}");

            Console.WriteLine($"User_A Final Balance: {engine.GetBalance("User_A")}");
        }
    }
}
