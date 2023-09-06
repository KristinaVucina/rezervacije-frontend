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
                        <FormKit type="primeInputText" name="name" label="Naziv" v-model="form.name" help="Naziv kluba" />
                        <FormKit type="primeInputText" name="slug" label="Kratica" v-model="form.slug"
                            help="Kratica kluba" />
                    </div>
                    <div class="double">
                        <FormKit type="primeInputText" name="url" label="URL" v-model="form.url" help="URL kluba" />
                        <FormKit type="primeInputText" name="email" label="Email" v-model="form.email" help="Email kluba" />
                    </div>
                    <div class="double">
                        <FormKit type="file" accept=".jpg,.jpeg,.png,.svg" name="image" label="Slika kluba" v-model="form.image"
                            help="Slika kluba" />
                        <FormKit type="primeInputText" name="reservations_until" label="Rezervacije do"
                            v-model="form.reservations_until" help="Rezervacije do" />
                    </div>
                    <div class="double">
                        <FormKit type="primeInputText" name="max_person_count" label="Max" v-model="form.max_person_count"
                            help="Maksimalan broj osoba po rezervaciji" />
                        <FormKit type="primeInputText" name="capacity" label="Kapacitet" v-model="form.capacity"
                            help="Kapacitet kluba" />
                    </div>
                </FormKit>
            </template>
        </Card>
    </div>
</template>
  
<script setup>
const form = ref({});
const route = useRoute()

const fillForm = async () => {
    await useClubs().getClub(parseInt(route.params.club));
    const club = useState('club');
    form.value = {
        id: club.value.id,
        name: club.value.name,
        email: club.value.email,
        url: club.value.url,
        slug: club.value.slug,
        reservations_until: club.value.reservations_until,
        max_person_count: club.value.max_person_count,
        capacity: club.value.capacity,
        owner_id: club.value.owner_id
    }
};

fillForm()

const submitHandler = async () => {
        // create formdata for file
        const formData = new FormData();
    
    Object.entries(form.value).forEach(([key, value]) => {
        if(key === "image" && value && value[0]?.file) {
            formData.append(key, value[0]?.file);
            return;
        }
        formData.append(key, value);
    });

    formData.append('_method', 'PUT')

    await useClubs().update(form.value.id,formData);
    await navigateTo("/admin/clubs");
};
</script>

<style scoped>
.double {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
    