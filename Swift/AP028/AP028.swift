/*
  -------------------------------------
  ‣ Apple Music Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Apple Music's "For You" section uses collaborative filtering and 
  content-based recommendation to suggest new music. One key aspect 
  is identifying which genres a user prefers based on their 
  listening frequency and recommending top-rated songs within those 
  dominant genres.

  » Problem:
  Write a Swift script that implements a "Smart Recommendation" engine.

  The system should:
    - Receive a `listeningHistory` (list of songs played).
    - Receive a `catalog` (available songs to recommend).
    - Identify the "Top Genre" (the one with the most plays).
    - Return a list of recommended songs from the catalog that:
        1. Match the Top Genre.
        2. Have NOT been listened to yet.
        3. Are sorted by their "Popularity Score" (descending).

  » Example:
    History: [Pop, Rock, Pop] -> Top Genre: Pop
    Catalog: [Rock (90), Pop (85), Pop (95)]
    Result: [Pop (95), Pop (85)] (Excluding history items)

  » Objective:
  Practice data aggregation, filtering, and sorting in Swift.

  » Approach:
  - Count genre frequencies using a Dictionary.
  - Sort dictionary by value to find the max.
  - Filter the catalog based on the winner and history exclusion.
  - Sort the result by rating.
*/

import Foundation

struct Song: Hashable {
    let id: Int
    let title: String
    let genre: String
    let popularity: Int
}

class RecommendationEngine {
    func getRecommendations(history: [Song], catalog: [Song]) -> [Song] {
        // 1. Identify Top Genre
        var genreCounts: [String: Int] = [:]
        for song in history {
            genreCounts[song.genre, default: 0] += 1
        }
        
        guard let topGenre = genreCounts.max(by: { $0.value < $1.value })?.key else {
            return []
        }
        
        // 2. Identify already listened IDs for exclusion
        let listenedIds = Set(history.map { $0.id })
        
        // 3. Filter and Sort
        let recommendations = catalog
            .filter { $0.genre == topGenre && !listenedIds.contains($0.id) }
            .sorted { $0.popularity > $1.popularity }
            
        return recommendations
    }
}

// Example Usage
let engine = RecommendationEngine()

let userHistory = [
    Song(id: 1, title: "Blinding Lights", genre: "Pop", popularity: 98),
    Song(id: 2, title: "Starboy", genre: "Pop", popularity: 95),
    Song(id: 3, title: "Bohemian Rhapsody", genre: "Rock", popularity: 99)
]

let musicCatalog = [
    Song(id: 4, title: "Anti-Hero", genre: "Pop", popularity: 92),
    Song(id: 5, title: "As It Was", genre: "Pop", popularity: 96),
    Song(id: 6, title: "Hotel California", genre: "Rock", popularity: 94),
    Song(id: 7, title: "Flowers", genre: "Pop", popularity: 97)
]

print("--- Apple Music Smart Recommendations ---")
let recommendations = engine.getRecommendations(history: userHistory, catalog: musicCatalog)

print("Based on your history, we recommend these Pop tracks:")
for (index, song) in recommendations.enumerated() {
    print("\(index + 1). \(song.title) (Popularity: \(song.popularity))")
}
