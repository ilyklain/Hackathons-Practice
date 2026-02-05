# -------------------------------------
# ‣ Twitch Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# Twitch bots (like Nightbot) listen for commands in the chat
# (e.g., !uptime, !points). To prevent "Command Spam", the bot
# engine must quickly identify and count how many valid commands
# are present in a burst of messages.
#
# » Problem:
# Write an Elixir function that counts commands starting with "!".
#
# The system should:
#   - Receive: a list of strings.
#   - Return total count of strings that start with "!".
#
# » Objective:
# Practice higher-order functions (Enum.count) in Elixir.
# -------------------------------------

defmodule TwitchBot do
  def count_commands(messages) do
    Enum.count(messages, fn msg -> String.starts_with?(msg, "!") end)
  end
end

# --- Example Usage ---
chat_burst = ["!points", "Hello everyone", "!uptime", "poggers", "!socials"]

IO.puts "Twitch Command Analytics Engine"
IO.puts "Commands in burst: #{TwitchBot.count_commands(chat_burst)}"
