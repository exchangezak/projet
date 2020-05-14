<template>
  <!-- Cette partie va contenir notre HTML -->
  <div>
    <h1>{{ title }}</h1>
    <p>{{ tagline }}</p>
    <!-- on va créer la structure de notre application -->
    <section>
      <!-- zone où on va afficher le titre en cours de lecture -->
      <h2>Now playing : {{ current.title }}</h2>
      <p>By : {{ current.artist }}</p>
      <!-- zone où on va afficher les contrôles du player -->
      <button>Prev</button>
      <button @click="play">Play</button>
      <button @click="pause">Pause</button>
      <button>Next</button>
    </section>
    <section>
      <!-- zone où on va afficher notre playlist -->
      <h2>Ma playlist</h2>
      <div v-for="song in songs" :key="song.src">
        <h3>Track : {{ song.title }}</h3>
        <p>Artist : {{ song.artist }}</p>
        <button>Play</button>
      </div>
    </section>
  </div>
</template>

<script>
// Cette partie va contenir notre code JS
// on va devoir exporter le component pour qu'il puisse être accessible et utilisable par notre application
export default {
  name: "Player",
  props: {
    title: String,
    tagline: String,
  },
  data() {
    return {
      current: {},
      index: 0,
      songs: [
        {
          title: "Seattle",
          artist: "Yung Kartz",
          src: require("../assets/music/Yung_Kartz_-_01_-_Seattle.mp3"),
        },
        {
          title: "Freedom",
          artist:"Yung Kartz",
          src: require("../assets/music/Yung_Kartz_-_03_-_Freedom.mp3"),
        },
        {
          title: "Too Grimy",
          artist: "Yung Kartz",
          src: require("../assets/music/Yung_Kartz_-_06_-_Too_Grimy.mp3"),
        },
        {
          title: "Straight Shot",
          artist: "Yung Kartz",
          src: require("../assets/music/Yung_Kartz_-_07_-_Straight_Shot.mp3"),
         },
      ],
      // next on va initialiser notre player
      player: new Audio(),
    };
  },
  mounted() {
    // cette méthode fait partie du cycle de vie d'un composant vuejs
    // les instructions qui se trouvent à l'intérieur ne seront exécutées qu'une fois lorsque le composant est affiché
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
  methods: {
    play(song) {
      // on va déclencher le player lorsqu'on appuie sur le bouton play
      if (typeof song.src !== "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
    },
    pause() {
      this.player.pause();
    },
  },
};

</script>

<style>
h1{
    color:blue;
    
}
/* Ici on va écrire note code CSS */
</style>
