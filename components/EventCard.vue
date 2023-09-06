<template>
    <div class="p-d-flex p-flex-column p-jc-center p-ai-center mx-2 p-3"
        :style="`height: 250px; background-image: url(${eventImage}); background-size: cover; background-position: center;`">
        <h3 class="text-2xl font-bold text-white">{{ event.name }}</h3>
        <p class="text-white">{{ event.description }}</p>
        <Button label="Rezervacija" icon="pi pi-external-link" @click="visible = true" />

        <Dialog v-model:visible="visible" modal header="Unesite broj osoba za rezervaciju" :style="{ width: '50vw' }">
            <FormKit type="primeInputNumber" name="person_count" label="Broj osoba" v-model="personCount"
                :validation="`between:0,${maxPersonCount}`" validation-visibility="live" />

            <Button @click="createReservation">Rezerviraj</Button>
        </Dialog>
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';

const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
});

const toast = useToast();

// await useAuth().getUser()
const createReservation = async () => {
    await useReservations().create({ person_count: personCount.value, event_id: props.event.id, user_id: useUser()?.value?.id })
    await useAuth().getUser(true)
    toast.add({ severity: 'info', summary: 'Rezervirano', detail: 'Uspješno ste napravili rezervaciju.', life: 3000 });
    visible.value = false
    // displ
}
const personCount = ref(0)

const maxPersonCount = computed(()=>props.event?.club?.max_person_count)

const visible = ref(false);

const config = useRuntimeConfig()

const eventImage = computed(() => {
    // check if image url starts with http and then return it, otherwise prepend api url to image url
    if (props.event.image_url.startsWith("http")) {
        return props.event.image_url;
    } else {
        // remove trailing slash from config.public.apiUrl
        const apiUrl = config.public.apiUrl.replace(/\/$/, "");
        return apiUrl + props.event.image_url;
    }
});
</script>
