<template>
    <div>
        <Card class="px-10">
            <template #title>
                <h1>Korisnici</h1>
            </template>
            <template #content>
                <DataTable :value="users" class="p-datatable-sm" tableStyle="min-width: 50rem">
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
                            <Button icon="pi pi-lock" @click="editRoles(slotProps.data)" />
                            <Button icon="pi pi-trash" severity="danger" @click="deleteUser(slotProps.data.id)" />
                        </template>
                    </Column>
                </DataTable>
            </template>
        </Card>

        <Dialog v-model:visible="visible" modal header="Uloge korisnika" :style="{ width: '50vw' }">
            <Card class="px-10">
            <template #content>
                <div v-for="role of roles" :key="role.id" class="flex align-items-center">
                    <Checkbox v-model="selectedRoles" :inputId="role.id" name="role" :value="role.id" />
                    <label :for="role.id">{{ role.name }}</label>
                </div>
            </template>
            <template #footer>
                <Button  severity="info" @click="syncRoles(selectedRoles, selectedUser.id)">
                    Spremi
                </Button>
            </template>
        </Card>
        </Dialog>
    </div>
</template>

<script  setup>
// users
const users = computed(() => useUsers().users.value)

useUsers().getUsers()

const deleteUser = (id) => {
    useUsers().deleteUser(id)
}

const syncRoles = (roles, id) => {
    useUsers().syncRoles(roles, id)
    useUsers().getUsers()
    visible.value = false
}


// roles
const roles = computed(() => useRoles().roles.value)
const visible = ref(false)
const selectedRoles = ref([])
const selectedUser = ref({})

useRoles().getRoles()

const editRoles = (user) => {
    selectedRoles.value = user.roles.map(x=>x.id)
    selectedUser.value = user
    visible.value = true
}


const columns = ref([
    { field: 'name', header: 'Naziv', sortable: false },
    { field: 'email', header: 'Email', sortable: false },
])

</script>
