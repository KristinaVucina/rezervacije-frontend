<template>
  <div>
    <!-- Title is Rezervacije located in top left of the screen bolded add padding above and to the left -->
    <h1 class="text-5xl font-bold text-white pt-10 pl-10 text-center" >Rezervacije</h1>
    <!-- under is list of clubs with label above Klubovi, they will be in a carousel -->
    <h3 class="text-2xl font-bold text-white pt-10 pl-10 pb-10">Clubs</h3>
    <Carousel :value="clubs" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <!-- styel with tailwindcss make the slotProps.data.image the background of entire card, and show title and description in white color -->
        <ClubCard :club="slotProps.data" @click="navigateTo('/clubs/'+slotProps.data.id)" />
      </template>
    </Carousel>
    
  </div>
</template>

<script setup>


await useClubs().getClubs()

const clubs = computed(()=>useClubs().clubs.value)


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

const getSeverity = (status) => {
  switch (status) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warning';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return null;
  }
};
</script>

<style>
body {
  /* bg image : https://images.unsplash.com/photo-1563784462386-044fd95e9852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80 */
  background-image: url("https://images.unsplash.com/photo-1608471551011-69c5cac6d910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80");
}
</style>