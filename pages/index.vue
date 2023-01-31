<template>
<div>
  <div class="row">
    <div class="col-3">
      <div class="d-flex justify-content-center kikker-sun"><img src="~/assets/img/kikker-sun.svg" alt="SIM"></div>
    </div>
    <div class="col-9">
      <h1 class="page__title">Over Ootes</h1>
      <p class="page__paragraph-highlighted">Dit Utrechtse Duo vaart voort op de grote levensvragen van vandaag; 
    hoe kunnen wij als mensen in symbiosis leven met de Aarde?</p>
    <p  class="page__paragraph-highlighted"> Met nog tien jaar om onze levenswijze collectief te verduurzamen vragen wij ons af, hoe kunnen we regeneratieve rituelen ontwikkelen voor een leefbare toekomst?
    Verwikkeld met technologieën en verweven in de natuur, vinden wij in muziek ons medium om in pure relatie te treden met de wereld om ons heen.
    Avonturen door de wildernis van Schotland en Noorwegen vinden hun weg naar poëtische zinnen en nieuwe beginnen in de songteksten van Tom.
    En durf om innerlijke zoektochten naar liefde en melancholie naar buiten te brengen, levenskunst laten stromen op onze stervende aarde, in de hoop om het tij op tijd te laten keren... </p>
    </div>
  </div>
</p>
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
<style lang="scss">
.kikker-sun{

}
</style>