/*
  -------------------------------------
  ‣ Google Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Chrome's V8 engine needs to allocate thousands of small objects 
  rapidly. Standard `malloc` can be slow due to fragmentation. 
  A "Memory Arena" is used to allocate blocks of memory from a 
  pre-allocated pool.

  » Problem:
  Write a C++ class `MemoryArena` that manages a fixed-size buffer.

  The system should:
    - Pre-allocate a large `char` array.
    - Provide an `allocate(size_t size)` function that returns a pointer.
    - If the request exceeds remaining space, return `nullptr`.
    - Provide a `reset()` function that clears the arena (O(1)).

  » Example:
    Arena Size: 1024 bytes
    Alloc 100 -> Pointer to start
    Alloc 200 -> Pointer to offset 100
    Reset -> Arena is empty again

  » Objective:
  Minimize allocation overhead and avoid external fragmentation.

  » Approach:
  - Keep a `top` pointer or offset.
  - Increment the offset on each allocation.
  - Return the address of the current offset.
*/

#include <iostream>
#include <vector>
#include <cstdint>

class MemoryArena {
private:
    std::vector<char> buffer;
    size_t offset;
    size_t capacity;

public:
    MemoryArena(size_t size) : offset(0), capacity(size) {
        buffer.resize(size);
    }

    void* allocate(size_t size) {
        // Align size to 8 bytes for performance
        size = (size + 7) & ~7;

        if (offset + size > capacity) {
            return nullptr;
        }

        void* ptr = &buffer[offset];
        offset += size;
        return ptr;
    }

    void reset() {
        offset = 0;
    }

    size_t used_memory() const {
        return offset;
    }
};

int main() {
    std::cout << "--- Google Chrome Memory Arena Simulation ---" << std::endl;

    MemoryArena arena(1024); // 1KB Arena

    void* obj1 = arena.allocate(128);
    void* obj2 = arena.allocate(256);

    if (obj1 && obj2) {
        std::cout << "Allocation successful." << std::endl;
        std::cout << "Memory Used: " << arena.used_memory() << " bytes" << std::endl;
    }

    arena.reset();
    std::cout << "Arena Reset. Memory Used: " << arena.used_memory() << " bytes" << std::endl;

    return 0;
}
