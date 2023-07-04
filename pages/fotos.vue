<template>
    <div>
        <div class="photos">
            <a class="col-md-6 photo" v-for="photo in bandphotos" :href="'https://ucarecdn.com/' + photo + '/'"
                target="_blank">
                <img :src="'https://ucarecdn.com/' + photo + '/-/scale_crop/1000x1000/smart/'" class="img-fluid"
                    alt="photo">
            </a>
        </div>
        <div class="photos">
            <h1 class="mt-4">Le Guess Who U? </h1>
            <a class="col-md-6 photo" v-for="photo in gigphotos" :href="'https://ucarecdn.com/' + photo + '/'"
                target="_blank">
                <img :src="'https://ucarecdn.com/' + photo + '/-/scale_crop/1000x1000/smart/'" class="img-fluid"
                    alt="photo">
            </a>
        </div>
    </div>
</template>
<script>
import logo from '~/components/logo.vue'

export default {
    head() {
        return {
            title: 'Fotos ~ Ootes'
        };
    },
    data() {
        return {
            bandphotos: [
                "d66f57fd-cc0d-41d1-8f54-43af947c825e",
                "02aaadc5-0012-41a2-b9a0-90fad059f688",
                "217f2f99-4527-4332-b534-12ab09dd3eac",
                "251aeb5f-2e35-4697-86be-21765b307210",
                "fd9257bc-a8d2-45e2-ab8f-aba625b3e04b",
                "e1b0ad21-9e0b-4882-8f79-84784d358ded",
                "90fa1266-fff3-4ac2-b19c-a6217dde5d92",
                "8f4709de-6f45-4464-af3b-4c2b3ccf042d",
                "d2fc50d1-be78-447d-bef6-37a13a707049",
                "a6d89dcc-e7d5-4d6d-8f85-6e70a0659dba",
                "3a89956b-0e5c-49bf-a273-1dd33b9216bc",
                "e1ec3de2-d884-4894-9f08-f4b8886993b5",
                "1e34799f-aca9-4836-8ea9-23ba1704dcde",
            ],
            gigphotos: [
                "e062c0ca-f7bd-47a7-842b-75491ed6d1cd",
                "1bcbef0c-8eea-477c-9739-b18e344a49d5",
                "352261ab-c95e-416b-8d53-5a549741a446",
                "ddc5b31c-80bf-4547-85ce-4130a0f1a9c5",
                "82162702-e702-42e3-aa94-39b19e307213",
                "7a52b0b3-5b08-4221-9466-a766363e2d0e",
                "873b233f-f92a-4632-aefe-230de6e394f0",
                "e6c0e947-1599-4209-8396-7f068e620202",
                "094f1343-fc29-4635-89d1-c1c13ef2365b",
                "8b356e5c-e929-4216-9966-510771c7c35f",
                "e1836636-9275-40da-8362-655b75d89f9d",
                "bab21eb3-5951-4250-b78d-c479dd917dac",
                "918bede1-405b-45f5-ba99-28cb4e3757b1",
                "0ec280ea-aa1b-44ac-be66-2dc5d01edf8c",
                "be55568d-9784-41fc-892e-752b8c66c3d6"

            ],
        }
    },
    components: {
        logo
    },
}
</script>
<style>
table {
    width: 100%;
}
</style>
<style scoped lang="scss">
.photos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: $spacing05;
}

.photo {
    // margin-bottom: $spacing05;

    img {
        max-width: 100%;
    }

    @media (min-width: $breakpoint-sm) {
        // margin-bottom: $spacing05;
    }
}
</style>
