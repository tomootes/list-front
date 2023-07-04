<template>
  <div>
    <div class="home container">
      <div class="hero">
        <h1 class="hero__overlay-text">Ootes</h1>
        <a class="photo" :href="'https://ucarecdn.com/251aeb5f-2e35-4697-86be-21765b307210/'" target="_blank">
          <img :src="'https://ucarecdn.com/251aeb5f-2e35-4697-86be-21765b307210/-/scale_crop/1000x500/smart/'"
            class="img-fluid" alt="photo">
        </a>
      </div>
      <div class="page__paragraph-highlighted">
        <p>Dit Utrechtse Duo vaart voort op de grote levensvragen van vandaag;
          hoe kunnen wij als mensen in symbiose leven met onze Aarde? Hoe en waar kunnen we elkaar vinden?</p>
        <p>We hebben nog maar tien jaar om onze manier van leven om te gooien. Hoe
          kunnen we nieuwe rituelen en gewoontes ontwikkelen voor een leefbare toekomst?
          Verstrikt geraakt in technologieën maar geinspireerd door de natuur, zien we onszelf doormodderen. </p>
        <p>
          In muziek vinden we een manier om onszelf uit te drukken. Onze liedjes reflecteren onze grote vragen
          maar krijgen vorm middels alledaagse verhalen.</p>
        <p>
          Avonturen door de wildernis van Schotland en Noorwegen klinken door in de songteksten van Tom.</p>
        <p>Een durf om innerlijke zoektochten naar liefde en melancholie naar buiten
          te brengen, levenskunst te beoefenen op onze stervende aarde, in de hoop om het tij op tijd te laten keren...
        </p>
      </div>
      <p class="page__paragraph-highlighted">
        <b>Tom Ootes</b> - tekst / zang / gitaar <br />
        <b>Huib Pruymboom</b> - drums
      </p>
      <div class="links">
        <a href="/videos" class="btn">Videos</a>
        <a href="/fotos" class="btn">Foto's</a>
      </div>

    </div>
  </div>
</template>

<script>
import logo from '~/components/logo.vue'

export default {
  head() {
    return {
      title: 'Homepage ~ Ootes'
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

.links {
  // margin-left: -.5rem;
  background-color: $purple;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .btn {
    display: flex;
    margin-left: 1rem;
  }

  h1 {
    margin-right: 1rem;
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
