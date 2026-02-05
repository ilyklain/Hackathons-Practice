/*
  -------------------------------------
  ‣ TikTok (ByteDance) Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  TikTok's "For You Page" (FYP) is powered by a recommendation system 
  that ranks videos based on a combination of factors. This ensures 
  users see content that is both highly engaging and personally 
  relevant to their interests.

  » Problem:
  Write a Dart program that ranks a list of videos for a specific user.

  The system should:
    - Receive a `User` with preferred categories (e.g., "Comedy", "Tech").
    - Receive a list of `Video` objects, each with:
        - Category
        - View Count
        - Engagement Rate (0.0 to 1.0)
        - Upload Time (hours ago)
    - Calculate a `Rank Score` based on:
        1. Category Match: +50 points if it matches user preference.
        2. Engagement: EngagementRate * 100 points.
        3. Popularity: Scale view count (e.g., views / 1000).
        4. Freshness: Subtract points for older videos (-2 points per hour).

  » Objective:
  Practice building scoring algorithms and working with list 
  transformations in Dart.

  » Approach:
  - Create `Video` and `User` classes.
  - Implement a `calculateScore` method.
  - Sort the list descending by score.
*/

class Video {
  final String id;
  final String category;
  final int views;
  final double engagementRate;
  final int hoursAgo;

  Video({
    required this.id,
    required this.category,
    required this.views,
    required this.engagementRate,
    required this.hoursAgo,
  });
}

class User {
  final String name;
  final List<String> interests;

  User({required this.name, required this.interests});
}

class FypEngine {
  double calculateScore(Video video, User user) {
    double score = 0;

    // 1. Category Match (Relevance)
    if (user.interests.contains(video.category)) {
      score += 50.0;
    }

    // 2. Engagement (Quality)
    score += video.engagementRate * 100.0;

    // 3. Popularity (Social Proof)
    score += video.views / 1000.0;

    // 4. Freshness (Recency)
    score -= video.hoursAgo * 2.0;

    return score;
  }

  List<Video> getRankedFeed(List<Video> videos, User user) {
    // We create a copy and sort it
    List<Video> ranked = List.from(videos);
    
    ranked.sort((a, b) {
      double scoreA = calculateScore(a, user);
      double scoreB = calculateScore(b, user);
      return scoreB.compareTo(scoreA); // Descending
    });

    return ranked;
  }
}

void main() {
  print("TikTok For You Page (FYP) Ranking Engine");

  final user = User(name: "Gustavo", interests: ["Tech", "Comedy"]);

  final feed = [
    Video(id: "v1", category: "Cooking", views: 50000, engagementRate: 0.8, hoursAgo: 2),
    Video(id: "v2", category: "Tech", views: 10000, engagementRate: 0.9, hoursAgo: 1),
    Video(id: "v3", category: "Comedy", views: 200000, engagementRate: 0.4, hoursAgo: 24),
    Video(id: "v4", category: "Tech", views: 5000, engagementRate: 0.7, hoursAgo: 48),
  ];

  final engine = FypEngine();
  final rankedFeed = engine.getRankedFeed(feed, user);

  print("Personalized Feed for ${user.name}:");
  for (var i = 0; i < rankedFeed.length; i++) {
    final v = rankedFeed[i];
    final score = engine.calculateScore(v, user);
    print("${i + 1}. [${v.id}] Category: ${v.category} | Views: ${v.views} | Score: ${score.toStringAsFixed(2)}");
  }
}
