<template>
    <div class="flex justify-center max-h-screen h-screen">
        <Card class="self-center">
            <template #title>
                <h1>Novi dogadjaj</h1>
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
                        <FormKit type="primeInputText" name="image_url" label="Link na sliku" v-model="form.image_url"
                            help="URL slike kluba" />
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
// $validated = $request->validate([
//     'name' => ['required', 'string'],
//     'email' => ['required', 'email', 'unique:events,email'],
//     'url' => ['nullable', 'url'],
//     'slug' => ['required', 'string', 'unique:events,slug'],
//     'image_url' => ['nullable', 'url'],
//     'reservations_until' => ['required', 'date_format:H:i'],
//     'max_person_count' => ['required', 'integer', 'min:0'],
//     'capacity' => ['required', 'integer', 'min:0'],
//     'owner_id' => ['required', 'exists:users,id'],
// ]);
const user = useUser();
const form = ref({});


const submitHandler = async () => {
    form.value.owner_id = user.value.id;
    await useEvents().create(form.value);
    await navigateTo("/admin/events");
};
</script>

<style scoped>
.double {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
    