<template>
<div>
  <h1>Songs</h1>
    <p>Wij verwachten lente 2023 ons eerste album hier te kunnen etaleren </p>
    <p>Voor nu kan je jezelf opperbest vermaken met de aanwezige: <a href="/videos" class="bijzonder">videos</a></p>
</div>
</template>
    
    <script>
    import logo from '~/components/logo.vue'
    
    export default {
      head() {
        return {
          title: 'my songs'
        };
      },
      components: {
        logo
      },
    
    }
    </script>

    <style>
  .bijzonder{
    padding: 1rem;
    background-color: orange;
    color: rgb(136, 36, 0);
    font-weight: bolder;
    font-size: 2rem;
  }
  </style>