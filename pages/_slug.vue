<template>
  <div class="content">
    <div class="content__banner img img--full" v-if="song.banner">
      <img
        :src="`${this.$axios.defaults.baseURL}/${song.banner.url}`"
        alt=""
      >
    </div>
    <h1 class="content__title" v-if="song.title">{{ song.title }} [{{song.creationDate}}] </h1>
    <!-- {{ song }} -->
    <audio class="content__audio" controls v-if="song.file">
      <source
        :src="`${this.$axios.defaults.baseURL}/${song.file.url}`"
        type="audio/wav"
      >
      Your browser does not support the audio tag.
    </audio>

  <h1>{{ song.youtubeID }} </h1>

    <iframe class="content__video" :src="`https://youtube.com/embed/${song.youtubeID}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen v-if="song.youtubeID"></iframe>

    <!-- {{ song }} -->
    <div class="content__song" v-if="song.text">
      <!-- <div class="content__song__bg"></div> -->
      <textarea name="" class="content__song__text" id="" cols="30" rows="10" v-html=song.text></textarea>
    </div>
  </div>
</template>

<script>
import logo from "~/components/logo.vue";

import axios from "axios";


export default {
  components: {
    logo
  },
  mounted: function () {
    console.log(this);
  },
  async asyncData({ $axios, params }) {
    console.log(params);
    const { data } = await $axios.get(`songs/${params.slug}`);
    let song = data;
    console.log(data);
    song.creationDate = song.creationDate.substring(0,10);
    return { song };
  }
};
</script>
