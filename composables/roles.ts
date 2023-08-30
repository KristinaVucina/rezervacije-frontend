export const useRoles = () => {
    const roles = useState<any>('roles', () => [])

    const getRoles = async (search: string = '') => {
        const { data } = await useApi('api/roles')
        roles.value = data.value
    }


    return {
        roles,
        getRoles,
    }
};