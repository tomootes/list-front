<template>
  <div class="content">
    <div class="content__banner img img--full" v-if="song.banner">
      <img :src="`${this.$axios.defaults.baseURL}/${song.banner.url}`" alt="">
    </div>
    <h1 class="content__title" :class="{ 'content__title--turquoise': song.youtubeID }" v-if="song.title">{{ song.title }} [{{song.creationDate}}] </h1>
    <iframe class="content__video" :src="`https://youtube.com/embed/${song.youtubeID}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen v-if="song.youtubeID"></iframe>

    <div class="content__song" :class="{ 'content__song--middle': song.youtubeID }" v-if="song.text">
      <textarea :rows="numberLinesText + 15" name="" class="content__song__text" v-html=song.text></textarea>
    </div>

    <div class="player" v-if="song.file">
      <audio controls>
        <source :src="`${this.$axios.defaults.baseURL}/${song.file.url}`"
          type="audio/wav"
        >
        Your browser does not support the audio tag.
      </audio>
    </div>

  </div>
</template>

<script>
import logo from "~/components/logo.vue";

import axios from "axios";

export default {
  head() {
    return {
      title: this.song.title,
    };
  },
  components: {
    logo
  },
  computed: {
    numberLinesText () {
      console.log(typeof this.song.text);
      let lines = this.song.text.split("\n");
      console.log(lines);
      return lines.length;
    }
  },
  mounted: function () {

  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`songs/${params.slug}`);
    let song = data;
    song.creationDate = song.creationDate.substring(0,10);
    return { song };
  }
};
</script>
