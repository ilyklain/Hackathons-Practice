<!--
  -------------------------------------
  ‣ Spotify Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Spotify's desktop app uses a "Play Queue" that allows users to 
  reorder tracks, remove them, and see the next upcoming song. 

  » Problem:
  Write a Vue 3 component that manages the Music Queue.

  The system should:
    - Display a list of tracks.
    - Provide a "Play Next" feature (moves a track to the top).
    - Provide a "Remove" feature.
    - Show the "Now Playing" track (the first one in the list).

  » Objective:
  Practice Vue's reactive refs, computed properties, and list transitions.

  » Approach:
  - Use `ref` for the tracks array.
  - Implement methods to manipulate the array (splice, unshift).
  - Use `v-for` with keys for efficient DOM updates.
-->

<script setup>
import { ref, computed } from 'vue';

const tracks = ref([
  { id: 1, title: "Blinding Lights", artist: "The Weeknd" },
  { id: 2, title: "Starboy", artist: "The Weeknd" },
  { id: 3, title: "Save Your Tears", artist: "The Weeknd" },
  { id: 4, title: "Die For You", artist: "The Weeknd" }
]);

const nowPlaying = computed(() => tracks.value[0]);
const queue = computed(() => tracks.value.slice(1));

const playNext = (index) => {
  // index is relative to the 'queue' (slice starts at 1)
  const realIndex = index + 1;
  const track = tracks.value.splice(realIndex, 1)[0];
  tracks.value.splice(1, 0, track);
};

const removeTrack = (index) => {
  const realIndex = index + 1;
  tracks.value.splice(realIndex, 1);
};
</script>

<template>
  <div class="spotify-player">
    <header>
      <h3>Now Playing</h3>
      <div v-if="nowPlaying" class="current-track">
        <strong>{{ nowPlaying.title }}</strong> - {{ nowPlaying.artist }}
      </div>
    </header>

    <section class="queue-section">
      <h3>Next in Queue</h3>
      <ul>
        <li v-for="(track, index) in queue" :key="track.id">
          <div class="track-info">
            <span>{{ track.title }}</span>
            <small>{{ track.artist }}</small>
          </div>
          <div class="actions">
            <button @click="playNext(index)">Play Next</button>
            <button @click="removeTrack(index)">Remove</button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.spotify-player {
  background: #121212;
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-family: sans-serif;
}

.current-track {
  color: #1DB954;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #282828;
}

.actions button {
  background: transparent;
  color: #b3b3b3;
  border: 1px solid #b3b3b3;
  margin-left: 5px;
  cursor: pointer;
}

.actions button:hover {
  color: white;
  border-color: white;
}
</style>
