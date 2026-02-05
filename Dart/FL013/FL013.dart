/*
  -------------------------------------
  ‣ Google / Flutter Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Flutter's reactive UI framework efficiently handles state updates. 
  To avoid "Jank" (UI stutter), high-frequency events like scroll or 
  text-input should be "Throttled" or "Debounced".

  » Problem:
  Write a Dart program that simulates a "Throttler" for search inputs.

  The system should:
    - Receive a series of keystrokes with timestamps (milliseconds).
    - Only trigger a "Search Request" if the last triggered request was 
      at least X milliseconds ago.

  » Example:
    Throttle: 500ms
    Input: "f" (0ms) -> SEARCH
    Input: "fl" (100ms) -> IGNORE
    Input: "flu" (600ms) -> SEARCH

  » Objective:
  Implement precise time-based filtering using Dart's logic.

  » Approach:
  - Iterate through input events.
  - Store the `lastTriggeredTime`.
  - Compare `currentTimestamp - lastTriggeredTime >= throttleTime`.
*/

class KeyEvent {
  final String text;
  final int timestamp;
  KeyEvent(this.text, this.timestamp);
}

void main() {
  final throttleLimit = 500;
  int lastTriggered = -1;

  final inputs = [
    KeyEvent("A", 0),
    KeyEvent("Al", 100),
    KeyEvent("Ale", 200),
    KeyEvent("Alexa", 600),
    KeyEvent("Alexa ", 700),
    KeyEvent("Alexa O", 1200),
  ];

  print("Google Search Input Throttler (Flutter simulation)");
  print("-------------------------------------------------");

  for (var event in inputs) {
    if (lastTriggered == -1 || event.timestamp - lastTriggered >= throttleLimit) {
      print("Time ${event.timestamp}ms: Triggering search for \"${event.text}\" [OK]");
      lastTriggered = event.timestamp;
    } else {
      print("Time ${event.timestamp}ms: Ignoring \"${event.text}\" [THROTTLED]");
    }
  }
}
