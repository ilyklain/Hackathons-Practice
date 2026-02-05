/*
  -------------------------------------
  ‣ NVIDIA Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  NVIDIA GPUs process millions of pixels simultaneously. In 2D game 
  engines, checking for "Pixel-Perfect Collision" can be slow. 
  To optimize this, we use "Bitmasks" where each bit represents a 
  pixel's occupancy in an 8x8 grid.

  » Problem:
  Write a C program that detects if two 8x8 bitmasks overlap.

  The system should:
    - Receive two `unsigned long long` (64-bit integers).
    - Each integer represents an 8x8 grid (one bit per pixel).
    - Perform an ultra-fast bitwise check to see if they share 
      any active pixels.
    - Return 1 if there is a collision, 0 otherwise.

  » Example:
    Mask A: 00000001 (Binary) -> Dec: 1
    Mask B: 00000001 (Binary) -> Dec: 1
    Result: Collision! (Bit 0 overlaps)

    Mask A: 10101010 (Dec: 170)
    Mask B: 01010101 (Dec: 85)
    Result: No Collision.

  » Objective:
  Practice bitwise operators (`&`, `|`, `^`) and low-level 
  integer manipulation.

  » Approach:
  - Simply use the bitwise AND (`&`) operator.
  - If `(A & B) != 0`, a collision exists.
*/

#include <stdio.h>

typedef unsigned long long uint64;

int detect_collision(uint64 maskA, uint64 maskB) {
    // A single bitwise AND tells us if any bit is 1 in both masks
    return (maskA & maskB) != 0;
}

void print_binary(uint64 n) {
    for (int i = 63; i >= 0; i--) {
        printf("%llu", (n >> i) & 1);
        if (i % 8 == 0 && i != 0) printf(" ");
    }
}

int main() {
    // Example: Two 8x8 sprites represented as 64-bit integers
    uint64 spriteA = 0xFF00FF00FF00FF00ULL; // Alternating rows
    uint64 spriteB = 0x00FF00FF00FF00FFULL; // Inverted alternating rows
    uint64 spriteC = 0x0000000000000001ULL; // Single pixel at corner

    printf("--- NVIDIA Sprite Collision Detector ---\n");
    
    printf("Checking A and B: ");
    if (detect_collision(spriteA, spriteB)) {
        printf("COLLISION DETECTED\n");
    } else {
        printf("NO COLLISION (Optimized Check)\n");
    }

    printf("Checking A and C: ");
    if (detect_collision(spriteA, spriteC)) {
        printf("COLLISION DETECTED\n");
    } else {
        printf("NO COLLISION\n");
    }

    return 0;
}
