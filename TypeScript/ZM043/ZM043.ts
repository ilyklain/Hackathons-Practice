/*
  -------------------------------------
  ‣ Zoom Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Zoom hosts must manage massive numbers of participants. Real-time 
  features like "Mute All" or tracking active speakers require 
  efficient management of participant state objects.

  » Problem:
  Create a TypeScript class to manage meeting participants.

  The system should:
    - Add a participant {id, name, isMuted}.
    - Remove a participant by ID.
    - provide a "muteAll()" method.
    - Provide a count of active participants.

  » Objective:
  Practice object-oriented state management in TypeScript.
*/

interface Participant {
    id: string;
    name: string;
    isMuted: boolean;
}

class MeetingManager {
    private participants: Map<string, Participant> = new Map();

    join(p: Participant) {
        this.participants.set(p.id, p);
    }

    leave(id: string) {
        this.participants.delete(id);
    }

    muteAll() {
        this.participants.forEach(p => p.isMuted = true);
    }

    get count(): number {
        return this.participants.size;
    }

    listMuted(): string[] {
        return Array.from(this.participants.values())
            .filter(p => p.isMuted)
            .map(p => p.name);
    }
}

// --- Example Usage ---
const zoom = new MeetingManager();
zoom.join({ id: "z1", name: "Alice", isMuted: false });
zoom.join({ id: "z2", name: "Bob", isMuted: true });

console.log("--- Zoom Participant Manager Simulation ---");
console.log(`Active Users: ${zoom.count}`);
zoom.muteAll();
console.log(`Total Muted: ${zoom.listMuted().length}`);
