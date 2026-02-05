/*
  -------------------------------------
  ‣ Google (Dart/Flutter) Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Flutter apps often consume streams of data (e.g., from WebSockets). 
  To reduce UI updates, we must "Batch" events that arrive in a 
  very short period.

  » Problem:
  Write a Dart function that takes a list of integers (timestamps) 
  and a batch window (ms). It should group integers into "buckets".

  The system should:
    - Group items that occur within the same time window.
    - Returns a List of Lists.

  » Example:
    Data: [100, 150, 400, 450, 800]
    Window: 200ms
    Result: [[100, 150], [400, 450], [800]]

  » Objective:
  Practice list manipulation and windowing logic in Dart.

  » Approach:
  - Sort the data (if not sorted).
  - Iterate and compare with the start of the current bucket.
  - Start a new bucket if exceeding the window.
*/

List<List<int>> batchEvents(List<int> events, int windowSize) {
  if (events.isEmpty) return [];

  events.sort();
  List<List<int>> batches = [];
  List<int> currentBatch = [events[0]];

  for (int i = 1; i < events.length; i++) {
    if (events[i] - currentBatch[0] <= windowSize) {
      currentBatch.add(events[i]);
    } else {
      batches.add(currentBatch);
      currentBatch = [events[i]];
    }
  }
  batches.add(currentBatch);

  return batches;
}

void main() {
  print("--- Flutter Stream Event Batcher ---");
  
  final events = [10, 50, 220, 250, 300, 600, 650];
  final window = 100;
  
  final result = batchEvents(events, window);
  
  print("Input Events: $events");
  print("Batch Window: $window ms");
  print("Output Batches: $result");
}
