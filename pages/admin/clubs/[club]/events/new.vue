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
                        <FormKit type="file" accept=".jpg,.jpeg,.png,.svg" name="image" label="Slika dogadjaja" v-model="form.image"
                            help="Slika dogadjaja" />
                        <FormKit type="primeInputText" name="url" label="URL" v-model="form.url" help="URL" />
                    </div>

                    <div class="double">
                        <FormKit type="primeInputText" name="time_start" label="Pocetak" v-model="form.time_start"
                            help="Pocetak dogadjaja" />
                        <FormKit type="primeInputText" name="time_end" label="Kraj" v-model="form.time_end"
                            help="Kraj dogadjaja" />
                    </div>
                </FormKit>
            </template>
        </Card>
    </div>
</template>
  
<script setup>
// $validated = $request->validate([
//     'name' => ['required', 'string'],
//     'description' => ['nullable', 'string'],
//     'image_url' => ['nullable', 'string'],
//     'slug' => ['nullable', 'string'],
//     'url' => ['nullable', 'url'],
//     'date' => ['required', 'date'],
//     'time_start' => ['required', 'date_format:H:i'],
//     'time_end' => ['required', 'date_format:H:i', 'after:time_start'],
//     'club_id' => ['required', 'exists:clubs,id'],
// ]);
const user = useUser();
const form = ref({});
const route = useRoute()

const submitHandler = async () => {

    const formData = new FormData();
    
    form.value.date = form.value.date.toISOString().split('T')[0];
    
    Object.entries(form.value).forEach(([key, value]) => {
        if(key === "image" && value && value[0]?.file) {
            formData.append(key, value[0].file);
            return;
        }
        formData.append(key, value);
    });

    formData.append("club_id", parseInt(route.params.club))

    await useEvents().create(formData);
    await navigateTo("/admin/clubs/" + route.params.club + "/events");
};
</script>

<style scoped>
.double {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
    