# -------------------------------------
# ‣ Pinterest Hackathon Challenge
# -------------------------------------
#
# Developed and Solved by: Gustavo Jaspe AKA Strawyh
# Date: 04/02/2026
#
# » Context:
# Pinterest's API must validate the metadata of a "Pin" before
# ingesting it into the system. Every valid Pin requires a
# title, an image URL, and a non-empty description.
#
# » Problem:
# Write an Elixir function that validates a Pin map.
#
# The system should:
#   - Receive: %{title: "...", url: "...", desc: "..."}
#   - Ensure all keys exist and are not empty strings.
#   - Return {:ok, "Valid"} or {:error, "Missing Fields"}.
#
# » Objective:
# Practice Map validation and tuple-based responses (the Elixir way).
# -------------------------------------

defmodule PinValidator do
  def validate(pin) do
    has_title = Map.get(pin, :title, "") != ""
    has_url = Map.get(pin, :url, "") != ""
    has_desc = Map.get(pin, :desc, "") != ""

    if has_title && has_url && has_desc do
      {:ok, "Pin is valid and ready for ingest."}
    else
      {:error, "Pin is missing mandatory metadata."}
    end
  end
end

# Example Usage
valid_pin = %{title: "My Room", url: "img.jpg", desc: "Cozy vibes"}
invalid_pin = %{title: "Broken", url: ""}

IO.puts "Pinterest API Metadata Validator"
IO.inspect PinValidator.validate(valid_pin)
IO.inspect PinValidator.validate(invalid_pin)
