<template>
    <div>
        <!-- Title is Rezervacije located in top left of the screen bolded add padding above and to the left -->
        <h1 class="text-5xl font-bold text-white pt-10 pl-10 text-center">{{ club.name }}</h1>
        <!-- under is list of clubs with label above Klubovi, they will be in a carousel -->
    <!-- under is list of events with label above Dogadjaji, they will be in a carousel -->
    <h2 class="text-2xl font-bold text-white pt-10 pl-10 pb-10">Nadolazeći događaji</h2>
    <Carousel :value="events" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <!-- styel with tailwindcss make the slotProps.data.image the background of entire card, and show title and description in white color -->
        <EventCard :event="slotProps.data" />
      </template>
    </Carousel>
    </div>
</template>
  
<script setup>
const route = useRoute()
 useClubs().getClub(parseInt(route.params.club))
const club = computed(()=>useClubs().club.value)

useEvents().getEvents(parseInt(route.params.club))
const events = computed(()=>useEvents().events.value)

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

</style>