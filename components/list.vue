<template>
  <div
    class="list"
    :class="{ 'small': small }"
  >
  <logo></logo>
    <div class="list__panel">

      <!-- <div class="list-filter">
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
      </div> -->
        <ul>
        <h2>Own work</h2>
        <li
          v-for="song in songs.ownWork"
          :key=song.id
        >
          <nuxt-link
            :class="toggleCategory(song)"
            :to="'/' + song.id"
          > {{ song.title }}</nuxt-link>
        </li>
      </ul>
      <ul>
        <h2>Covers</h2>
        <li
          v-for="song in songs.cover"
          :key=song.id
        >
          <nuxt-link
            :class="toggleCategory(song)"
            :to="'/' + song.id"
          > {{ song.title }}</nuxt-link>
        </li>
      </ul>

    </div>
  </div>

</template>
<script>
import logo from "~/components/logo.vue";
import stone from "~/components/stone.vue";

export default {
  components: {
    logo,
    stone
  },
  data: function() {
    return {
      small: false,
      ownWork: true,
      cover: true
    };
  },
  methods: {
    toggleCategory: function(song) {
      return {
        hidden: !this[song.type],
        cover: song.type === 'cover',
        ownWork: song.type === 'ownWork',
      };
    }
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