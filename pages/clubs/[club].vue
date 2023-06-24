<template>
    <div>
        <!-- Title is Rezervacije located in top left of the screen bolded add padding above and to the left -->
        <h1 class="text-5xl font-bold text-white pt-10 pl-10">{{  }}</h1>
        <!-- under is list of clubs with label above Klubovi, they will be in a carousel -->
        <h2 class="text-3xl font-bold text-white pt-10 pl-10 pb-10">Klubovi</h2>
        <Carousel :value="club.events" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <!-- styel with tailwindcss make the slotProps.data.image the background of entire card, and show title and description in white color -->
                <div class="p-d-flex p-flex-column p-jc-center p-ai-center mx-2 p-3"
                    :style="`height: 250px; background-image: url(${slotProps.data.image}); background-size: cover; background-position: center;`">
                    <h3 class="text-2xl font-bold text-white">{{ slotProps.data.name }}</h3>
                    <p class="text-white">{{ slotProps.data.description }}</p>
                </div>

            </template>
        </Carousel>
        <!-- under is list of events with label above Dogadjaji, they will be in a carousel -->
        <h2 class="text-3xl font-bold text-white pt-10 pl-10">Dogadjaji</h2>

    </div>
</template>
  
<script setup>

const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

</script>
  
<style>
body {
    /* bg image : https://images.unsplash.com/photo-1563784462386-044fd95e9852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80 */
    background-image: url("https://images.unsplash.com/photo-1563784462386-044fd95e9852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80");
}
</style>