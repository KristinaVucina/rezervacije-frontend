export const useEvents = () => {
    const events = useState<any>('events', () => [])
    const event = useState<any>('event', () => null)

    const getEvents = async (eventId: number) => {
        const { data } = await useApi('api/clubs/' + eventId + '/events')
        events.value = data.value
    }

    const getEvent = async (id: number) => {
        const { data } = await useApi('api/events/' + id)
        event.value = data.value
    }

    const create = async (event: any) => {
        const { data } = await useApi('api/events', {
            method: 'POST',
            body: JSON.stringify(event)
        })
        events.value.push(data.value)
    }

    const update = async (event: any) => {
        const { data } = await useApi('api/events/' + event.id, {
            method: 'PUT',
            body: JSON.stringify(event)
        })
        events.value.splice(events.value.findIndex((c: any) => c.id === (data.value as any).id), 1, data.value)
    }

    const deleteEvent = async (id: number) => {
        const { data } = await useApi('api/events/' + id, {
            method: 'DELETE'
        })
        events.value.splice(events.value.findIndex((c: any) => c.id === id), 1)
    }

    return {
        events,
        getEvents,
        getEvent,
        create,
        update,
        deleteEvent
    }
};