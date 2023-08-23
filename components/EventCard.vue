<template>
    <div class="p-d-flex p-flex-column p-jc-center p-ai-center mx-2 p-3"
        :style="`height: 250px; background-image: url(${event.image_url}); background-size: cover; background-position: center;`">
        <h3 class="text-2xl font-bold text-white">{{ event.name }}</h3>
        <p class="text-white">{{ event.description }}</p>
        <Button label="Rezervacija" icon="pi pi-external-link" @click="visible = true" />

<Dialog v-model:visible="visible" modal header="Unesite broj osoba za rezervaciju" :style="{ width: '50vw' }">
    <FormKit type="primeInputNumber" name="person_count" label="Broj osoba" v-model="personCount" />

    <Button @click="createReservation">Rezerviraj</Button>
</Dialog>
    </div>
</template>

<script setup>

const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
});
await useAuth().getUser()
const user = computed(()=>useAuth().user.value)
const createReservation = ()=>{
    useReservations().create({person_count: personCount.value, event_id: props.event.id, user_id: 1})
}
const personCount = ref(0)
const visible = ref(false);
</script>
