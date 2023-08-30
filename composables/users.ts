export const useUsers = () => {
    const users = useState<any>('users', () => [])

    const getUsers = async (search: string = '') => {
        const { data } = await useApi('api/users',{params:{search:search}})
        users.value = data.value
    }

    const syncRoles = async (roles: any, userId: number) => {
        await useApi('api/users/'+userId+'/sync_roles', {
            method: 'POST',
            body: {roles: roles}
        })
        await useAuth().getUser()
    }


    const deleteUser = async (id: number) => {
        const { data } = await useApi('api/users/' + id, {
            method: 'DELETE'
        })
        users.value.splice(users.value.findIndex((c: any) => c.id === id), 1)
    }

    return {
        users,
        getUsers,
        deleteUser,
        syncRoles
    }
};