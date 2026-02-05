# -----------------------------------
# ‣ Discord Hackathon Challenge
# -----------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# Context:
# Discord servers generate millions of messages per day. Moderation
# systems need to analyze message activity to detect spam behavior and
# identify the most active users in short time windows.
#
# In this challenge, you will build a message analyzer that determines
# which user sent the most messages within a rolling time window.
#
# Problem:
# You are given a list of message events. Each event contains:
#   - user_id (string)
#   - timestamp (integer, seconds)
#   - content (string)
#
# Given a time window (in seconds), return the user_id with the highest
# number of messages sent within that window.
#
# If multiple users have the same message count, return the
# lexicographically smallest user_id.
#
# Example:
#   Events:
#     ("u1", 1, "hi")
#     ("u2", 2, "hello")
#     ("u1", 3, "spam")
#     ("u1", 5, "spam again")
#     ("u2", 6, "yo")
#
#   Window: 5 seconds
#
#   Output:
#     "u1"
#
# Objective:
# Efficiently process large volumes of message events while keeping
# the solution clean, functional, and scalable.
#
# Approach:
# - Sort events by timestamp
# - Use a sliding window
# - Track message counts per user
# - Dynamically maintain the most active user
#
# -----------------------------------


defmodule DiscordMessageAnalyzer do
  def most_active_user(events, window) do
    events
    |> Enum.sort_by(fn {_, timestamp, _} -> timestamp end)
    |> sliding_window(window)
  end

  defp sliding_window(events, window) do
    process(events, events, %{}, 0, "")
  end

  defp process([], _left, _counts, _max, result), do: result

  defp process([right | rest], left, counts, max_count, result) do
    {user, timestamp, _} = right
    counts = Map.update(counts, user, 1, &(&1 + 1))

    {left, counts} = shrink_window(left, timestamp, window = nil, counts)

    current = counts[user]

    {max_count, result} =
      cond do
        current > max_count ->
          {current, user}

        current == max_count and user < result ->
          {current, user}

        true ->
          {max_count, result}
      end

    process(rest, left, counts, max_count, result)
  end

  defp shrink_window([{u, t, _} | rest] = left, current_time, window, counts)
       when current_time - t > window do
    counts =
      case Map.get(counts, u) do
        1 -> Map.delete(counts, u)
        n -> Map.put(counts, u, n - 1)
      end

    shrink_window(rest, current_time, window, counts)
  end

  defp shrink_window(left, _current_time, _window, counts),
    do: {left, counts}
end

# ---------------------
# Example Usage
# ---------------------

events = [
  {"u1", 1, "hi"},
  {"u2", 2, "hello"},
  {"u1", 3, "spam"},
  {"u1", 5, "spam again"},
  {"u2", 6, "yo"}
]

IO.puts(DiscordMessageAnalyzer.most_active_user(events, 5))
