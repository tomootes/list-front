<template>
  <div
    class="list"
    :class="{ 'small': small }"
  >
      <logo></logo>
    <ul>
      <li v-for="song in songs" :key=song.id >
        <nuxt-link :to="'/' + song.id"> {{ song.title }}</nuxt-link>
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
      small: false
    };
  },
  computed: {
    songs() {
      return this.$store.state.songs;
    }
  },
mounted: function () {
  this.$route .fullPath !== "/" ? (this.small = true) : (this.small = false);
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
  })
},
  watch: {
    $route(to, from) {
      console.log(to);
      to.fullPath !== "/" ? (this.small = true) : (this.small = false);
    }
  }
};
</script>