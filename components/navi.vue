<template>
    <nav>
        <nuxt-link to="/">[Home]</nuxt-link>
        <nuxt-link to="/gigs">[Gigs]</nuxt-link>
        <nuxt-link to="/songs">[Songs]</nuxt-link>
        <nuxt-link to="/videos">[Videos]</nuxt-link>
        <nuxt-link to="/contact">[Contact]</nuxt-link>
    </nav>
</template>  
<style lang="scss">
.logo.nuxt-link-exact-active{
    background: none;
}
.nuxt-link-exact-active{
    font-weight: bolder;
    color: darken(#0067ff, 20%);
    background: antiquewhite;
}
nav {
    display: flex;
    flex-wrap: wrap;
    a {
        background-color: white;
    }
}
</style>