<template>
  <div class="page">
    <list></list>
    <stone></stone>
    <nuxt />
  </div>
</template>
<script>
import logo from '~/components/logo.vue'
import list from '~/components/list.vue'
import stone from '~/components/stone.vue'

export default {

  components: {
    logo,
    list,
    stone
  },
  data: function() {
    return {
      listActive: false
    };
  },
  computed: {
    songs () {
      return this.$store.state.songs
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(to);
    to !== '/' ? this.listActive = true : null;
  }

}
</script>