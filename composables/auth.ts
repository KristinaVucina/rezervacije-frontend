export const useAuth = () => {
    const user = useState<any>('user', () => null)

    const getUser = async () => {
        const { data } = await useApi('api/user')
        user.value = data.value
    }

    const login = async (loginData: LoginData) => {
        await useApi('login', {
            method: 'POST',
            body: JSON.stringify(loginData)
        })
        await getUser()
    }

    return {
        user,
        getUser,
        login
    }
};