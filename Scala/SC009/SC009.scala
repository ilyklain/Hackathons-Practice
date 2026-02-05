/*
  -------------------------------------
  ‣ LinkedIn Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  LinkedIn uses "Pathfinding" to determine if a user has a 2nd or 3rd degree
  connection to a job recruiter. This is vital for the "Referral" feature.

  » Problem:
  Write a Scala program that identifies if two users are "Second Degree" 
  connections (they share at least one mutual friend but are not 
  directly connected).

  The system should:
    - Take a graph of connections: Map[User, Set[User]]
    - Take User A and User B
    - Return true if they are 2nd degree, false otherwise.

  » Example:
    Graph:
      A -> [B, C]
      B -> [A, D]
      C -> [A, D]
      D -> [B, C]

    A and D are 2nd degree (share B and C).

  » Objective:
  Leverage Scala's functional paradigm and Set operations to perform 
  graph analysis efficiently.

  » Approach:
  - Check if User B is already in User A's connections (Direct).
  - Find intersection between A's friends and B's friends.
  - If intersection is not empty and they aren't direct, they are 2nd degree.
*/

object ConnectionAnalyzer {
  type User = String
  type Graph = Map[User, Set[User]]

  def isSecondDegree(graph: Graph, userA: User, userB: User): Boolean = {
    val connectionsA = graph.getOrElse(userA, Set.empty)
    val connectionsB = graph.getOrElse(userB, Set.empty)

    // Not a 2nd degree if they are already directly connected
    val areDirectlyConnected = connectionsA.contains(userB)
    
    // Find mutual connections
    val mutualConnections = connectionsA.intersect(connectionsB)

    mutualConnections.nonEmpty && !areDirectlyConnected && userA != userB
  }

  def main(args: Array[String]): Unit = {
    val socialGraph: Graph = Map(
      "Alice" -> Set("Bob", "Charlie"),
      "Bob"   -> Set("Alice", "David", "Eve"),
      "Charlie" -> Set("Alice", "David"),
      "David" -> Set("Bob", "Charlie"),
      "Eve"   -> Set("Bob")
    )

    println("LinkedIn Connection Degrees")
    
    val pair1 = ("Alice", "David")
    println(s"Are ${pair1._1} and ${pair1._2} 2nd degree? ${isSecondDegree(socialGraph, pair1._1, pair1._2)}")

    val pair2 = ("Alice", "Bob")
    println(s"Are ${pair2._1} and ${pair2._2} 2nd degree? ${isSecondDegree(socialGraph, pair2._1, pair2._2)}")
  }
}
