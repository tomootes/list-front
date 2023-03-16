<template>
    <div class="row">
        <h1 class="page__title">Contact</h1>
        <p>Voor vragen en info kan je contact opnemen met Tom.</p>
        <ul>
            <li><b>EMAIL</b>: tom[apenstaartje]ootes.io</li>
            <li><b>TELEFOON</b>: 0623447230</li>
        </ul>
    </div>
</template>
<script>
import list from '~/components/list.vue'
export default {
    head() {
        return {
            title: 'Contact ~ Ootes'
        };
    },
    components: {
        list
    },
}
</script>