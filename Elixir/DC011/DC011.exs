# -------------------------------------
# ‣ Discord Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# Discord handles billions of messages daily. To prevent spam and
# redundant processing, the system needs to "Deduplicate" rapidly
# repeated messages from the same user across multiple channels.
#
# » Problem:
# Write an Elixir script that implements a simple deduplication logic
# for a stream of message events.
#
# The system should:
#   - Receive messages: {user_id, content}
#   - Keep track of the LAST message content per user.
#   - Flag a message as "REDUNDANT" if it's identical to the previous one
#     from that same user.
#
# » Example:
#   User1: "Hello" -> OK
#   User2: "Hey" -> OK
#   User1: "Hello" -> REDUNDANT
#   User1: "Back" -> OK
#
# » Objective:
# Use Elixir's immutable Maps and recursive processing style.
#
# » Approach:
# - Process the list of messages tail-recursively.
# - Pass a Map storing `user_id => last_content` as state.
#

defmodule DiscordDeduplicator do
  def process_messages(messages) do
    do_process(messages, %{}, [])
  end

  defp do_process([], _state, results), do: Enum.reverse(results)

  defp do_process([msg | tail], state, results) do
    user_id = msg.user_id
    content = msg.content

    last_content = Map.get(state, user_id)

    status = if last_content == content, do: :REDUNDANT, else: :OK

    new_state = Map.put(state, user_id, content)
    do_process(tail, new_state, [{msg.id, status} | results])
  end
end

# Example Usage
log = [
  %{id: "m1", user_id: "Strawy", content: "Hello world"},
  %{id: "m2", user_id: "Dev", content: "Working..."},
  %{id: "m3", user_id: "Strawy", content: "Hello world"}, # Redundant
  %{id: "m4", user_id: "Strawy", content: "I am back"},
  %{id: "m5", user_id: "Dev", content: "Working..."} # Redundant
]

IO.puts "Discord Message Deduplication Engine"
IO.puts "------------------------------------"

results = DiscordDeduplicator.process_messages(log)

Enum.each(results, fn {id, status} ->
  IO.puts "Message [#{id}]: #{status}"
end)
