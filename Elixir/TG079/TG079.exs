# -------------------------------------
# ‣ Telegram Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# Telegram usernames must always start with the "@" symbol to be
# linkable. When a user input their nickname, the system must
# ensure the format is correct by automatically prepending
# the symbol if it is missing.
#
# » Problem:
# Write an Elixir function that formats a username.
#
# The system should:
#   - Receive: "gustavo" -> Return "@gustavo"
#   - Receive: "@strawy"  -> Return "@strawy"
#   - Return the string in lowercase.
#
# » Objective:
# Practice string manipulation and conditional formatting in Elixir.
# -------------------------------------

defmodule TelegramFormatter do
  def format_handle(name) do
    name = String.downcase(name)
    if String.starts_with?(name, "@") do
      name
    else
      "@" <> name
    end
  end
end

# --- Example Usage ---
IO.puts "Telegram Username Formatter"
IO.puts "Input (gustavo): #{TelegramFormatter.format_handle("gustavo")}"
IO.puts "Input (@Strawyh): #{TelegramFormatter.format_handle("@Strawyh")}"
