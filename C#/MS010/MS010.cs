/*
  -------------------------------------
  ‣ Microsoft Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Azure Load Balancers must distribute traffic across multiple 
  virtual machines. Some VMs are more powerful than others, 
  requiring a "Weighted Round Robin" algorithm.

  » Problem:
  Write a C# program that simulates a load balancer selecting 
  the next server based on their assigned weight.

  The system should:
    - Take a list of Servers { ID, Weight }
    - Implement a "GetNextServer" function.
    - If a server has weight 3, it should be selected 3 times before 
      moving to the next server.

  » Example:
    Servers: S1(Weight: 2), S2(Weight: 1)
    Sequence: S1, S1, S2, S1, S1, S2...

  » Objective:
  Practice class design and state management in C#.

  » Approach:
  - Create a Server class to track ID, Weight, and current uses.
  - Maintain a global index to track the current server.
  - Reset use-counter when weight is reached.
*/

using System;
using System.Collections.Generic;

public class Server
{
    public string Id { get; set; }
    public int Weight { get; set; }
    public int CurrentUses { get; set; }

    public Server(string id, int weight)
    {
        Id = id;
        Weight = weight;
        CurrentUses = 0;
    }
}

public class LoadBalancer
{
    private List<Server> _servers;
    private int _currentIndex = 0;

    public LoadBalancer(List<Server> servers)
    {
        _servers = servers;
    }

    public string GetNextServer()
    {
        if (_servers.Count == 0) return null;

        Server current = _servers[_currentIndex];
        current.CurrentUses++;

        string selectedId = current.Id;

        // If weight reached, move to next server and reset counter
        if (current.CurrentUses >= current.Weight)
        {
            current.CurrentUses = 0;
            _currentIndex = (_currentIndex + 1) % _servers.Count;
        }

        return selectedId;
    }
}

class Program
{
    static void Main()
    {
        var servers = new List<Server>
        {
            new Server("Azure-Node-A", 3),
            new Server("Azure-Node-B", 1),
            new Server("Azure-Node-C", 2)
        };

        var lb = new LoadBalancer(servers);

        Console.WriteLine("Microsoft Azure Load Balancer Simulation");
        Console.WriteLine("----------------------------------------");

        for (int i = 0; i < 10; i++)
        {
            Console.WriteLine($"Request #{i + 1} routed to: {lb.GetNextServer()}");
        }
    }
}
