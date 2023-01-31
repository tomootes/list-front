<template>
    <div>
        <h1 class="page__title">Video's</h1>
        <list></list>
    </div>
</template>
<script>
import list from '~/components/list.vue'
export default {
    head() {
    return {
        title: 'my songs'
    };
    },
    components: {
    list
    },
}
</script>