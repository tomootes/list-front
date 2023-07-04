<template>
    <div>
        <div class="home container">
            <h1>Technique Fatigue</h1>
            <div class="hero">

                <a class="photo photo--rotate" :href="'https://ucarecdn.com/fcc9ad2f-e679-42ef-8d87-0f5f38a91182/'"
                    target="_blank">
                    <img :src="'https://ucarecdn.com/fcc9ad2f-e679-42ef-8d87-0f5f38a91182/Ootes_TechniekFatigue_Def_3000x300.jpg'"
                        class="img-fluid" alt="photo">
                </a>
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
    components: {
        logo
    },
    computed: {
        innerWidth() {
            if (process.client) {
                return window.innerWidth
            } else {
                return 0
            }
        },
        innerHeight() {
            if (process.client) {
                return window.innerHeight
            } else {
                return 0
            }
        }
    },
    created() {

        if (process.browser) {

            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;

            var maxDegrees = 80;

            console.log('heeee');

            window.onmousemove = function (event) {
                // console.log(event.pageX);
                var mouseX = event.pageX / this.innerWidth;
                var mouseY = event.pageY / this.innerHeight;

                // console.log(this.screenWidth);

                var yDegrees = (mouseX * maxDegrees) - 0.5 * maxDegrees;
                var xDegrees = -0.5 * ((mouseY * maxDegrees) - 0.5 * maxDegrees);
                console.log('blud');
                console.log(yDegrees);
                document.getElementsByClassName("elToRotate")[0].style.transform = 'rotateY(' + yDegrees + 'deg) rotateX(' + xDegrees + 'deg)';

            }

        }
    },
}
</script>
<style scoped lang="scss">
.elToRotate {
    box-shadow: 60px -16px teal;
}
</style>
  