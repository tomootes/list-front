<template>
  <div class="page">
    <div class="container">
      <div class="container">
        <div class="header">
          <logo></logo>
          <navi></navi>
        </div>
      </div>
      <div class="page-content">
        <nuxt />
      </div>
      <div class="page-footer">

        <div class="page-footer__follow">
          <a target="_blank" href="https://www.instagram.com/ootes.band/">Volg ons: <img
              src="~/assets/img/instagram.svg" alt=""></a>
        </div>
        <!-- <div class="page-footer__under-construction">
          <img src="~/assets/img/under-construction.svg" alt="">
          <p>Deze website is in aanbouw!~</p>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import navi from '~/components/navi.vue'
import logo from '~/components/logo.vue'
import list from '~/components/list.vue'
import stone from '~/components/stone.vue'

export default {

  components: {
    navi,
    logo,
    list,
    stone
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
$blue: #0014C8;
$lighter-blue: lighten($blue, 45%);

body {
  background-image:
    radial-gradient(circle at center center, white, #ffffff),
    repeating-radial-gradient(circle at center center, #FFF500, #ffffff, 10px, transparent 20px, transparent 10px);
  background-blend-mode: multiply;
}

.page-content {
  margin: 1rem 0 1.5rem;
  background-color: antiquewhite;
  padding: .75rem;

  @media (min-width: $breakpoint-sm) {
    margin: 2rem 0 4rem;
    padding: 2rem;
  }
}

.page-footer {
  background: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 6rem;

  img {
    width: 40px;
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