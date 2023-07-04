<template>
  <div class="page">
    <div class="container">
      <div class="header mb-md">
        <logo></logo>
        <navi></navi>
      </div>
    </div>
    <div class="page-content container"
      :class="{ 'container--md': this.$route.path === '/videos', 'container--lg': this.$route.path === '/fotos' }">
      <nuxt />
    </div>
    <div class="page-footer container">
      <div class="page-footer__follow">
        <a target="_blank" href="https://www.instagram.com/ootes.band/">Volg ons: <img src="~/assets/img/camera.svg"
            alt=""></a>
      </div>
    </div>
  </div>
</template>
<script>
import navi from '~/components/navi.vue'
import logo from '~/components/logo.vue'
import list from '~/components/list.vue'

export default {

  components: {
    navi,
    logo,
    list
  },
  data: function () {
    return {
      listActive: false
    };
  },
  computed: {
    songs() {
      return this.$store.state.songs
    }
  },
  beforeRouteLeave(to, from, next) {
    to !== '/' ? this.listActive = true : null;
  }

}
</script>
<style lang="scss">
body {
  background-image:
    radial-gradient(circle at center center, white, #ffffff),
    repeating-radial-gradient(circle at center center, #FFF500, #ffffff, 10px, transparent 20px, transparent 10px);
  background-blend-mode: multiply;
}

.page-content {
  margin: 1rem 0 1.5rem;
  background-color: antiquewhite;
  padding: $spacing04;

  @media (min-width: $breakpoint-sm) {
    margin: 2rem 0 4rem;
    padding: $spacing08;
  }
}

.page-footer {
  background: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: $spacing04;
  margin: 6rem 0;

  img {
    width: 160px;
  }

  &__under-construction {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 0;
    margin-bottom: 1rem;

    img {
      margin-right: 1rem;
    }

    p {
      margin: 0;
    }
  }

  &__follow {
    font-weight: bold;
    font-size: 2rem;
  }
}

h1 {
  color: #1300ff;
  margin-bottom: 2rem;
  font-weight: bolder;
}
</style>
