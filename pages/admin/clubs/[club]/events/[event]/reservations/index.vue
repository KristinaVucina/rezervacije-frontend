<template>
    <div>
        <Card class="px-10">
            <template #title>
                <h1>Rezervacije</h1>
            </template>
            <template #content>
                <DataTable :value="reservations" class="p-datatable-sm" tableStyle="min-width: 50rem">
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
                            <nuxt-link :to="`/admin/clubs/${route.params.club}/events/${route.params.event}/reservations/${slotProps.data.id}`">
                                <Button icon="pi pi-pencil" severity="info" />
                            </nuxt-link>
                            <Button icon="pi pi-trash" severity="danger" @click="deleteReservation(slotProps.data.id)" />
                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>
    </div>
</template>

<script  setup>
const reservations = computed(() => useReservations().reservations.value)
const route = useRoute()

useReservations().getReservations(parseInt(route.params.event))

const deleteReservation = (id) => {
    useReservations().deleteReservation(id)
}
const columns = ref([
    { field: 'user.name', header: 'Rezervirao', sortable: false },
    { field: 'person_count', header: 'Broj osoba', sortable: false },
])
</script>