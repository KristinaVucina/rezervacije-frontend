<template>
    <div class="flex justify-center max-h-screen h-screen">
        <Card class="self-center">
            <template #title>
                <h1>Uredi klub</h1>
            </template>
            <template #content>
                <FormKit id="registerForm" v-model="form" type="form" :submit-attrs="{
                    inputClass: 'p-button p-component',
                }" @submit="submitHandler">
                    <div class="double">
                        <FormKit type="primeInputText" name="name" label="Naziv" v-model="form.name"
                            help="Naziv dogadjaja" />
                        <FormKit type="primeInputText" name="slug" label="Kratica" v-model="form.slug"
                            help="Kratica kluba" />
                    </div>
                    <div class="double">
                        <FormKit type="primeCalendar" name="date" label="Datum" v-model="form.date"
                            help="Datum dogadjaja" />
                        <FormKit type="primeInputText" name="description" label="Opis" v-model="form.description"
                            help="Opis dogadjaja" />

                    </div>
                    <div class="double">
                        <FormKit type="primeInputText" name="image_url" label="Slika" v-model="form.image_url"
                            help="URL slike" />
                        <FormKit type="primeInputText" name="url" label="URL" v-model="form.url" help="URL" />
                    </div>

                    <div class="double">
                        <FormKit type="primeInputText" name="time_start" label="Pocetak" v-model="form.time_start"
                            help="Pocetak dogadjaja" />
                        <FormKit type="primeInputText" name="time_end" label="Kraj" v-model="form.time_end"
                            help="Kraj dogadjaja" />
                    </div>
                </FormKit>            </template>
        </Card>
    </div>
</template>
  
<script setup>
const form = ref({});
const route = useRoute()

const fillForm = async () => {
    await useEvents().getEvent(parseInt(route.params.event));
    const event = useState('event');
    form.value = {
        id: event.value.id,
        name: event.value.name,
        email: event.value.email,
        url: event.value.url,
        slug: event.value.slug,
        image_url: event.value.image_url,
        reservations_until: event.value.reservations_until,
        max_person_count: event.value.max_person_count,
        capacity: event.value.capacity,
        owner_id: event.value.owner_id,
        club_id: event.value.club_id
    }
};

fillForm()

const submitHandler = async () => {
    await useEvents().update(form.value);
    await navigateTo("/admin/clubs/" + route.params.club + "/events" );
};
</script>

<style scoped>
.double {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
    