<template>
    <div>
        <Card class="px-10">
            <template #title>
                <h1>Klubovi</h1>
            </template>
            <template #content>
                <DataTable :value="clubs" class="p-datatable-sm" tableStyle="min-width: 50rem">
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
                            <nuxt-link :to="`/admin/clubs/${slotProps.data.id}`">
                                <Button icon="pi pi-pencil" severity="info" label="Uredi" />
                            </nuxt-link>
                            <nuxt-link :to="`/admin/clubs/${slotProps.data.id}/events`">
                                <Button icon="pi pi-calendar" severity="warning" label="Dogadjaji" />
                            </nuxt-link>
                                <Button icon="pi pi-trash" severity="danger" label="Obrisi" @click="deleteClub(slotProps.data.id)" />

                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>
    </div>
</template>

<script  setup>
const clubs = computed(() => useClubs().clubs.value)

useClubs().getClubs()

const deleteClub = (id) => {
    useClubs().deleteClub(id)
} 

const columns = ref([
    { field: 'name', header: 'Naziv', sortable: false },
    { field: 'email', header: 'Email', sortable: false },
])

</script>
