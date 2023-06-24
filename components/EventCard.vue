<template>
    <div class="p-d-flex p-flex-column p-jc-center p-ai-center mx-2 p-3"
        :style="`height: 250px; background-image: url(${event.image}); background-size: cover; background-position: center;`">
        <h3 class="text-2xl font-bold text-white">{{ event.name }}</h3>
        <p class="text-white">{{ event.description }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
});
</script>