<template>
    <div style="margin-top: 15px;">
        <span id="typedText" class="tagline"></span>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Typed from 'typed.js';

onMounted(() => {
    var typed = new Typed("#typedText", {
        strings: ['自强不息，博学精艺'],
        startDelay: 300,
        backDelay: 2500,
        typeSpeed: 100,
        backSpeed: 100,
        loop: false,
        showCursor: true,
        shuffle: true,
        cursorChar: `<span style="font-size: 24px; font-weight: 500;">▍</span>`,
    });
})
</script>

<style scoped>
.tagline {
    padding-top: 8px;
    max-width: 392px;
    line-height: 28px;
    font-size: 18px;
    font-weight: 500;
    white-space: pre-wrap;
    color: var(--vp-c-text-2);
}

@media (min-width: 640px) {
    .tagline {
        padding-top: 12px;
        max-width: 576px;
        line-height: 32px;
        font-size: 20px;
    }
}

@media (min-width: 960px) {
    .tagline {
        margin: 0;
        line-height: 36px;
        font-size: 24px;
    }
}
</style>