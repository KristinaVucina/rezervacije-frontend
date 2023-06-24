<template>
  <div>
    <!-- Title is Rezervacije located in top left of the screen bolded add padding above and to the left -->
    <h1 class="text-5xl font-bold text-white pt-10 pl-10">Rezervacije</h1>
    <!-- under is list of clubs with label above Klubovi, they will be in a carousel -->
    <h2 class="text-3xl font-bold text-white pt-10 pl-10 pb-10">Klubovi</h2>
    <Carousel :value="clubs" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <!-- styel with tailwindcss make the slotProps.data.image the background of entire card, and show title and description in white color -->
        <ClubCard :club="slotProps.data" />
      </template>
    </Carousel>
    <!-- under is list of events with label above Dogadjaji, they will be in a carousel -->
    <h2 class="text-3xl font-bold text-white pt-10 pl-10 pb-10">Nadolazeci dogadjaji</h2>
    <Carousel :value="events" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <!-- styel with tailwindcss make the slotProps.data.image the background of entire card, and show title and description in white color -->
        <EventCard :event="slotProps.data" />
      </template>
    </Carousel>
  </div>
</template>

<script setup>

const clubs = ref([
  {
    id: 1,
    name: "Club 1",
    description: "Club 1 description",
    image: "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    address: "Club 1 address",
    phone: "Club 1 phone",
    email: "Club 1 email",
    website: "Club 1 website",
    facebook: "Club 1 facebook",
    instagram: "Club 1 instagram",
    twitter: "Club 1 twitter",
    youtube: "Club 1 youtube",
    tiktok: "Club 1 tiktok",
    createdAt: "2021-03-01 00:00:00",
    updatedAt: "2021-03-01 00:00:00",
  },
  {
    id: 2,
    name: "Club 2",
    description: "Club 2 description",
    image: "https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    address: "Club 2 address",
    phone: "Club 2 phone",
    email: "Club 2 email",
    website: "Club 2 website",
    facebook: "Club 2 facebook",
    instagram: "Club 2 instagram",
    twitter: "Club 2 twitter",
    youtube: "Club 2 youtube",
    tiktok: "Club 2 tiktok",
    createdAt: "2021-03-01 00:00:00",
    updatedAt: "2021-03-01 00:00:00",
  },
  {
    id: 3,
    name: "Club 3",
    description: "Club",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1429&q=80",
    address: "Club 3 address",
    phone: "Club 3 phone",
    email: "Club 3 email",
    website: "Club 3 website",
    facebook: "Club 3 facebook",
    instagram: "Club 3 instagram",
    twitter: "Club 3 twitter",
    youtube: "Club 3 youtube",
    tiktok: "Club 3 tiktok",
    createdAt: "2021-03-01 00:00:00",

    updatedAt: "2021-03-01 00:00:00",
  },
]);

const events = ref([
  {
    id: 1,
    name: "Event 1",
    description: "Event 1 description",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    address: "Event 1 address",
    phone: "Event 1 phone",
    email: "Event 1 email",
    website: "Event 1 website",
    facebook: "Event 1 facebook",
    instagram: "Event 1 instagram",
    twitter: "Event 1 twitter",
    youtube: "Event 1 youtube",
    tiktok: "Event 1 tiktok",
    createdAt: "2021-03-01 00:00:00",
    updatedAt: "2021-03-01 00:00:00",
  },
  {
    id: 2,
    name: "Event 2",
    description: "Event 2 description",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    address: "Event 2 address",
    phone: "Event 2 phone",
    email: "Event 2 email",
    website: "Event 2 website",
    facebook: "Event 2 facebook",
    instagram: "Event 2 instagram",
    twitter: "Event 2 twitter",
    youtube: "Event 2 youtube",
    tiktok: "Event 2 tiktok",
    createdAt: "2021-03-01 00:00:00",
    updatedAt: "2021-03-01 00:00:00",
  },
]);

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
  background-image: url("https://images.unsplash.com/photo-1563784462386-044fd95e9852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80");
}
</style>