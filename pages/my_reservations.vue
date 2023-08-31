<template>
    <div>
        <Card class="px-10">
            <template #title>
                <h1>Moje rezervacije</h1>
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
                            <Button icon="pi pi-print" severity="info" @click="printReservation(slotProps.data.id)" />
                            <Button icon="pi pi-trash" severity="danger" @click="deleteReservation(slotProps.data.id)" />
                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>
    </div>
</template>

<script  setup>
const reservations = computed(() => useUser()?.value?.reservations ?? [])


const deleteReservation = async (id) => {
    await useReservations().deleteReservation(id, false)
    await useAuth().getUser(true)
}

const printReservation = (id) => {
    useClubs().printClub(id)
}

const columns = ref([
    { field: 'event.club.name', header: 'Klub', sortable: false },
    { field: 'event.name', header: 'Dogadjaj', sortable: false },
    { field: 'person_count', header: 'Broj osoba', sortable: false },
])

</script>
