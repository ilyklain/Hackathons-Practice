# -------------------------------------
# ‣ WhatsApp Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# WhatsApp's infrastructure (built on Erlang/Elixir) handles massive
# message queues. Messages are processed in a First-In-First-Out
# (FIFO) order to ensure that conversation flow remains logical.
#
# » Problem:
# Write an Elixir script that processes a message queue.
#
# The system should:
#   - Receive: a list of message bodies.
#   - Output: each message with its "Sequence ID" (starting at 1).
#   - Use recursion to process the list.
#
# » Objective:
# Practice tail recursion and list processing in Elixir.
# -------------------------------------

defmodule MessageQueue do
  def process(messages), do: do_process(messages, 1)

  defp do_process([], _acc), do: :ok
  defp do_process([head | tail], acc) do
    IO.puts "Processing [ID:#{acc}]: #{head}"
    do_process(tail, acc + 1)
  end
end

# --- Example Usage ---
queue = ["Hello!", "How are you?", "Did you see the news?", "Talk later."]

IO.puts "WhatsApp Message Delivery Simulator"
MessageQueue.process(queue)
