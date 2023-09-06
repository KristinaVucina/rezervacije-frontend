<template>
    <div class="p-d-flex p-flex-column p-jc-center p-ai-center mx-2 p-3"
        :style="`height: 250px; background-image: url(${clubImage}); background-size: cover; background-position: center;`">
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
const config = useRuntimeConfig()

const clubImage = computed(() => {
    // check if image url starts with http and then return it, otherwise prepend api url to image url
    if (props.club.image_url.startsWith("http")) {
        return props.club.image_url;
    }else{
        // remove trailing slash from config.public.apiUrl
        const apiUrl = config.public.apiUrl.replace(/\/$/, "");
        return apiUrl + props.club.image_url;
    }
});
</script>