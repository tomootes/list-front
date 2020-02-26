<template>
  <div
    class="list"
    :class="{ 'small': small }"
  >
    <logo></logo>
    <div class="list-filter">
      <div class="list-filter__category">
        <input
          type="checkbox"
          id="own-work"
          v-model="ownWork"
        >
        <label for="own-work">Own work</label>
      </div>
      <div class="list-filter__category">
        <input
          type="checkbox"
          id="covers"
          v-model="cover"
        >
        <label for="covers">Covers</label>
      </div>

    </div>
    <ul>
      <li
        v-for="song in songs"
        :key=song.id
      >
        <nuxt-link v-bind:class="classObject(song)" :to="'/' + song.id"> {{ song.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import logo from "~/components/logo.vue";

export default {
  components: {
    logo
  },
  data: function() {
    return {
      small: false,
      ownWork: true,
      cover: true,
    };
  },
  methods: {
    classObject: function (song) {
      console.log(song);
      return {
        'hidden' : ( !this[song.type]),
        // 'hidden': this.ownWork,
        // 'hidden': this.covers,
      }
    },
  },
  computed: {
    songs() {
      return this.$store.state.songs;
    }
  },
  mounted: function() {
    this.$route.fullPath !== "/" ? (this.small = true) : (this.small = false);
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
    });
  },
  watch: {
    $route(to, from) {
      console.log(to);
      to.fullPath !== "/" ? (this.small = true) : (this.small = false);
    }
  }
};
</script>