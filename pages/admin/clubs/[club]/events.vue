<template>
    <div>
        <Card class="px-10">
            <template #title>
                <h1>Dogadjaji</h1>
            </template>
            <template #content>
                <DataTable :value="events" class="p-datatable-sm" tableStyle="min-width: 50rem">
                    <template #header>
                        <!-- <InputText type="search" width="100px" class="p-mr-2" placeholder="Pretraži" @keydown.enter="getClient(<string>search)" v-model="search" /> -->
                        <!-- <Button  style="width: 40px !important; margin-left: 10px !important" icon="pi pi-search" severity="help"
                                 @click="getClient(<string>search)"
                                 @keydown.enter="getClient(<string>search)"
                        /> -->
                    </template>
                    <Column v-for="column in columns" :key="column.field" :field="column.field" :header="column.header"
                        :sortable="column.sortable">
                    </Column>
                    <Column header="Akcije">
                        <template #body="slotProps">
                            <nuxt-link :to="`/admin/events/${slotProps.data.id}`">
                                <Button icon="pi pi-pencil" severity="info" />
                            </nuxt-link>
                            <nuxt-link :to="`/admin/events/${slotProps.data.id}/reservations`">
                                <Button icon="pi pi-calendar" severity="warning" />
                            </nuxt-link>
                            <Button icon="pi pi-trash" severity="danger" @click="deleteEvent(slotProps.data.id)" />
                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>
    </div>
</template>

<script  setup>
const events = computed(() => useEvents().events.value)
const route = useRoute()

useEvents().getEvents(parseInt(route.params.club))

const deleteEvent = (id) => {
    useEvents().deleteEvent(id)
}
const columns = ref([
    { field: 'name', header: 'Naziv', sortable: false },
    { field: 'description', header: 'Opis', sortable: false },
])
</script>