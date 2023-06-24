export const useEvents = () => {
    const events = useState<any>('events', () => [])
    const event = useState<any>('event', () => null)

    const getEvents = async (clubId: number) => {
        const { data } = await useApi('api/clubs/' + clubId + '/events')
        events.value = data.value
    }

    const getEvent = async (id: number) => {
        const { data } = await useApi('api/events/' + id)
        event.value = data.value
    }

    return {
        events,
        getEvents,
        getEvent
    }
};