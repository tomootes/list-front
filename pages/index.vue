<template>
  <div>
    <div class="home">
      <div class="home__bg">
        <span class="home__bg__arrow-down">↓</span>
        <img src="https://ucarecdn.com/d66f57fd-cc0d-41d1-8f54-43af947c825e/-/scale_crop/1240x1900/smart/"
          alt="Ootes band" class="img-fluid">

      </div>
      <div class="home__content">
        <h1 class="page__title mt-3">Over Ootes</h1>
        <p class="page__paragraph-highlighted">Dit Utrechtse Duo vaart voort op de grote levensvragen van vandaag;
          hoe kunnen wij als mensen in symbiose leven met onze Aarde? Hoe en waar kunnen we elkaar weer vinden? </p>
        <p class="page__paragraph-highlighted">Met nog tien jaar om onze levenswijze collectief om te gooien vragen wij
          ons af, hoe kunnen we regeneratieve rituelen ontwikkelen voor een leefbare toekomst?
          Verwikkeld met technologieën maar geinspireerd door de natuur, vinden wij in muziek ons medium om in relatie
          te treden met de wereld om ons heen.
          Avonturen door de wildernis van Schotland en Noorwegen vinden hun weg naar gevonden zinnen en nieuwe beginnen
          in de songteksten van Tom.</p>
        <p class="page__paragraph-highlighted">Een durf om innerlijke zoektochten naar liefde en melancholie naar buiten
          te brengen, levenskunst te beoefenen op onze stervende aarde, in de hoop om het tij op tijd te laten keren...
        </p>
      </div>
    </div>
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
<style scoped lang="scss">
.page__title {
  margin: 1.5rem 0;
  text-align: center;

  @media (min-width: $breakpoint-md) {
    color: white !important;
  }
}

.home {
  position: relative;

  &__bg {
    position: relative;

    &__arrow-down {
      font-size: 5rem;
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      color: white;
    }
  }

}

.home__content {


  @media (min-width: $breakpoint-md) {
    padding: 2rem 5rem;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
