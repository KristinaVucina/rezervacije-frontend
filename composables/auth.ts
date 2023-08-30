export const useAuth = () => {
    const user = useState<any>('user', () => null)

    const getUser = async () => {
        if(useUser().value !== null && useUser().value!==undefined) return

        const { data } = await useApi('api/user')
        user.value = data.value
    }

    const login = async (loginData: LoginData) => {
        await useApi('login', {
            method: 'POST',
            body: JSON.stringify(loginData)
        })
        // await getUser()
        navigateTo('/')
    }
    
    const register = async (registerData: RegisterData) => {
        await useApi('register', {
            method: 'POST',
            body: JSON.stringify(registerData)
        })
        // await getUser()
        navigateTo('/')
    }



    return {
        user,
        getUser,
        login,
        register,
    }
};