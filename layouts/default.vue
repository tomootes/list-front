<template>
  <div class="page">
    <list></list>
    <nuxt />
  </div>
</template>
<script>
import logo from '~/components/logo.vue'
import list from '~/components/list.vue'

export default {

  components: {
    logo,
    list
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