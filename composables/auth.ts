export const useAuth = () => {
    const user = useState<any>('user', () => null)

    const getUser = async (refresh: boolean = false) => {
        // if(useUser().value !== null && useUser().value!==undefined && !refresh) return
        const { data } = await useApi('api/user')
        console.log('data', data)
        useState<any>('user', () => data.value)
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