export const useClubs = () => {
    const clubs = useState<any>('clubs', () => [])
    const club = useState<any>('club', () => null)

    const getClubs = async () => {
        const { data } = await useApi('api/clubs')
        clubs.value = data.value
    }

    const getClub = async (id: number) => {
        const { data } = await useApi('api/clubs/' + id)
        club.value = data.value
    }

    const create = async (club: any) => {
        const { data } = await useApi('api/clubs', {
            method: 'POST',
            body: JSON.stringify(club)
        })
        clubs.value.push(data.value)
    }

    return {
        clubs,
        getClubs,
        getClub,
        create
    }
};