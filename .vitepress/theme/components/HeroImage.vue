<template>
    <img class="VPImage image-src" :src="image" alt="HAUE-CS-WIKI">
</template>

<script setup>
import { onMounted, ref } from 'vue';

const hostname = ref(undefined);
const image = ref('/logo/favicon.png');
onMounted(() => {
    hostname.value = window.location.hostname;
    if (hostname.value === 'newbie.frexlink.com') {
        image.value = '/logo/favicon.png';
    }
})
</script>