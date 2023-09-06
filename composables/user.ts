export const useUser = () => useState('user', () => null);

export const hasRole = (name: string) => {
    const user: any = useUser()
    return user?.roles.some((x: any) => x.name === name)
}

export const hasAnyRole = (names: Array<any>) => {
    const user: any = useUser()
    return user?.value?.roles?.some((x: any) => names.includes(x.name))
}