export const useReservations = () => {
    const reservations = useState<any>('reservations', () => [])
    const reservation = useState<any>('reservation', () => null)

    const getReservations = async (reservationId: number) => {
        const { data } = await useApi('api/events/' + reservationId + '/reservations')
        reservations.value = data.value
    }

    const getReservation = async (id: number) => {
        const { data } = await useApi('api/reservations/' + id)
        reservation.value = data.value
    }

    const create = async (reservation: any) => {
        const { data } = await useApi('api/reservations', {
            method: 'POST',
            body: JSON.stringify(reservation)
        })
        reservations.value.push(data.value)
    }

    const update = async (reservation: any) => {
        const { data } = await useApi('api/reservations/' + reservation.id, {
            method: 'PUT',
            body: JSON.stringify(reservation)
        })
        reservations.value.splice(reservations.value.findIndex((c: any) => c.id === (data.value as any).id), 1, data.value)
    }

    const deleteReservation = async (id: number, splice: boolean = true) => {
        const { data } = await useApi('api/reservations/' + id, {
            method: 'DELETE'
        })
        if(splice){
            reservations.value.splice(reservations.value.findIndex((c: any) => c.id === id), 1)
        }
    }

    return {
        reservations,
        reservation,
        getReservations,
        getReservation,
        create,
        update,
        deleteReservation
    }
};