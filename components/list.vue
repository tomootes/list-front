<template>
  <div class="">
    <div class="row">
      <!-- {{ songs }} -->
      <ul class="songs-list col-md-6">
        <h2 class="text-center">Eigen werk</h2>
        <li v-for="song in songs.ownWork" :key=song.id>
          <nuxt-link :class="song.youtubeID ? 'p-bottom' : null" :to="'/videos/' + song.id">
            {{ song.title }}
            <img :src="'https://img.youtube.com/vi/' + song.youtubeID + '/hqdefault.jpg'" alt="VID"
              v-if="song.youtubeID">
            <!-- <img :src="`http://37.139.26.166:1337/${song.banner.url}`" alt="" v-else> -->
          </nuxt-link>
        </li>
      </ul>
      <ul class="songs-list col-md-6">
        <h2 class="text-center">Covers</h2>
        <li v-for="song in songs.cover" :key=song.id>
          <nuxt-link :class="song.youtubeID ? 'p-bottom' : null" :to="'/videos/' + song.id"> {{ song.title }}
            <img :src="'https://img.youtube.com/vi/' + song.youtubeID + '/hqdefault.jpg'" alt="VID"
              v-if="song.youtubeID">
          </nuxt-link>
        </li>
      </ul>

    </div>
  </div>

</template>
<script>
import logo from "~/components/logo.vue";
import stone from "~/components/stone.vue";

import axios from "axios";

export default {
  components: {
    logo,
    stone
  },
  data: function () {
    return {
      ownWork: true,
      cover: true
    };
  },
  computed: {
    songs() {
      return this.$store.state.songs;
    }
  },
  mounted: function () {
    this.$route.fullPath !== "/" ? (this.small = true) : (this.small = false);
  },
  watch: {
    $route(to, from) {
      to.fullPath !== "/" ? (this.small = true) : (this.small = false);
    }
  }
};
</script>
<style lang="scss">
.songs-list {
  list-style: none;

  h2 {
    font-weight: bolder;
  }

  a {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem 1.5rem;
    margin-bottom: .5rem;
    background-color: lighten($blue, 20%);
    color: white;
    font-weight: bolder;

    img {
      margin-top: 1rem;
    }

    @media (min-width: $breakpoint-sm) {
      &.p-bottom {
        padding: 1rem 2.5rem 2.5rem;
      }

      margin-bottom: 1rem;
      padding: 1rem 2.5rem;
    }
  }
}
</style>