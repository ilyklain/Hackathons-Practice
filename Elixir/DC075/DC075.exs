# -------------------------------------
# ‣ Discord Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# Discord's safety systems scan message content to protect
# communities. In Elixir, this can be done efficiently using
# pattern matching and list processing, often running across
# millions of concurrent processes.
#
# » Problem:
# Write an Elixir script that checks if a message contains
# blacklisted words.
#
# The system should:
#   - Receive: message (String) and blacklist (List of strings).
#   - Return: :SAFE if clean, :FLAGGED if it contains any bad word.
#   - Comparison must be case-insensitive.
#
# » Objective:
# Practice pattern matching and list membership in Elixir.
# -------------------------------------

defmodule DiscordScanner do
  def scan(message, blacklist) do
    msg_words = message |> String.downcase() |> String.split()

    # Check if any word in the message exists in the blacklist
    is_safe = Enum.all?(msg_words, fn word ->
      word not in Enum.map(blacklist, &String.downcase/1)
    end)

    if is_safe, do: :SAFE, else: :FLAGGED
  end
end

# --- Example Usage ---
blacklist = ["spam", "scam", "malware"]

IO.puts "Discord Global Safety Scanner"
IO.puts "Message 1 (Hello world): #{DiscordScanner.scan("Hello world", blacklist)}"
IO.puts "Message 2 (This is a sCaM!): #{DiscordScanner.scan("This is a sCaM", blacklist)}"
