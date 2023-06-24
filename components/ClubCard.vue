<template>
    <div class="p-d-flex p-flex-column p-jc-center p-ai-center mx-2 p-3"
        :style="`height: 250px; background-image: url(${club.image}); background-size: cover; background-position: center;`">
        <h3 class="text-2xl font-bold text-white">{{ club.name }}</h3>
        <p class="text-white">{{ club.description }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    club: {
        type: Object,
        required: true,
    },
});
</script>