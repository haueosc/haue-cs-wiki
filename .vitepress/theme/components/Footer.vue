<template>
    <div class="footers">
        <div class="container-block" style="margin-bottom: 5px;">
            <p style="font-weight: bold; font-size: 13px;">Released under the
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
                    CC BY-NC-SA 4.0 License
                </a>
            </p>
        </div>
        <div class="container-block" style="margin-bottom: 5px;">
            <p style="font-weight: bold; font-size: 13px;">Copyright © 2024 HAUE-CS-WIKI</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const hostname = ref(undefined);
onMounted(() => {
    hostname.value = window.location.hostname;
})
</script>

<style scoped>
a {
    font-weight: bold;
    font-size: 13px;
    text-underline-offset: 2px;
    transition: all 0.3s;
}

a:hover {
    color: rgb(0, 162, 255);
    text-decoration-line: underline;
}

.footers {
    padding-top: 200px;
    padding-bottom: 20px;
}

.container-block {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>