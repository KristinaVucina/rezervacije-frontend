export const useClubs = () => {
    const clubs = useState<any>('clubs', () => [])
    const club = useState<any>('club', () => null)

    const getClubs = async (search: string = '') => {
        const { data } = await useApi('api/clubs',{params:{search:search}})
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

    const update = async (club: any) => {
        const { data } = await useApi('api/clubs/' + club.id, {
            method: 'PUT',
            body: JSON.stringify(club)
        })
        clubs.value.splice(clubs.value.findIndex((c: any) => c.id === (data.value as any).id), 1, data.value)
    }

    const deleteClub = async (id: number) => {
        const { data } = await useApi('api/clubs/' + id, {
            method: 'DELETE'
        })
        clubs.value.splice(clubs.value.findIndex((c: any) => c.id === id), 1)
    }

    return {
        clubs,
        club,
        getClubs,
        getClub,
        create,
        update,
        deleteClub
    }
};