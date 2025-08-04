/*
  ------------------------------------------
  ‣ Spotify Hackathon Challenge | Problem SPT23
  ------------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 08/03/2025

  » Problem:
  You are building a lightweight engine for managing user playlists.
  Each playlist consists of songs, each represented by a string (title).

  A user may perform a "skip streak" by skipping several songs in a row.
  Your task is to analyze the skip history and find the **longest streak**
  of consecutive skips for a given playlist session.

  Skipped songs are represented as `true` and listened songs as `false`.

  » Objective:
  Implement a function that returns the length of the longest consecutive
  sequence of skipped songs in the session.

  » Example:
  Input: [false, true, true, false, true, true, true, false]
  Output: 3

  » Approach:
  Iterate through the boolean list, counting consecutive `true` values.
  Reset count on `false`, and keep track of the maximum streak.
*/

using System;
using System.Collections.Generic;

class SkipAnalyzer
{
    public static int LongestSkipStreak(List<bool> session)
    {
        int maxStreak = 0, currentStreak = 0;

        foreach (bool skipped in session)
        {
            if (skipped)
            {
                currentStreak++;
                maxStreak = Math.Max(maxStreak, currentStreak);
            }
            else
            {
                currentStreak = 0;
            }
        }

        return maxStreak;
    }

    static void Main()
    {
        var session = new List<bool> { false, true, true, false, true, true, true, false };
        Console.WriteLine("Longest skip streak: " + LongestSkipStreak(session));
    }
}
