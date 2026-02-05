/*
  -------------------------------------
  ‣ Apple Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Apple's Neural Engine requires highly efficient memory management for 
  real-time image processing. Fragmented memory can lead to latency spikes
  in Core ML execution.

  » Problem:
  Write a C program that simulates a "Memory Defragmenter" for a fixed-size
  buffer. 

  The system should:
    - Receive a buffer representing memory blocks (0 = Empty, 1-9 = Process ID)
    - Move all active processes (non-zero) to the beginning of the buffer
    - Fill the remaining space with zeros
    - Maintain the relative order of the processes

  » Example:
    Input Buffer: [0, 1, 0, 3, 2, 0, 5]
    Output Buffer: [1, 3, 2, 5, 0, 0, 0]

  » Objective:
  Implement an in-place algorithm that minimizes memory writes and execution time.

  » Approach:
  - Use a "write pointer" strategy
  - Traverse the array once
  - If a non-zero value is found, move it to the write pointer position
  - Fill the rest with zeros
*/

#include <stdio.h>

void defragment_memory(int* buffer, int size) {
    int write_index = 0;

    // First pass: move all non-zero elements forward
    for (int i = 0; i < size; i++) {
        if (buffer[i] != 0) {
            buffer[write_index] = buffer[i];
            write_index++;
        }
    }

    // Second pass: fill remaining blocks with zero
    while (write_index < size) {
        buffer[write_index] = 0;
        write_index++;
    }
}

void print_buffer(const char* label, int* buffer, int size) {
    printf("%s: [", label);
    for (int i = 0; i < size; i++) {
        printf("%d%s", buffer[i], (i == size - 1) ? "" : ", ");
    }
    printf("]\n");
}

int main() {
    int memory[] = {0, 2, 0, 1, 4, 0, 0, 3, 9, 0, 5};
    int size = sizeof(memory) / sizeof(memory[0]);

    printf("--- Apple Neural Engine Memory Monitor ---\n");
    print_buffer("Original State ", memory, size);

    defragment_memory(memory, size);

    print_buffer("Defragmented   ", memory, size);

    return 0;
}
