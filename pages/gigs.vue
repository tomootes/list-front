<template>
    <div >
        <h1 class="page__title">Gigs</h1>
        <table>
  <tr>
    <th>Venue</th>
    <th>Plaats</th>
    <th>Datum</th>
  </tr>
  <tr>
    <td>Geen gigs gevonden</td>
    <!-- <td>Maria Anders</td>
    <td>Germany</td> -->
  </tr>
  <tr>
    <!-- <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td> -->
  </tr>
</table>

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
table{
    width: 100%;
}
</style>