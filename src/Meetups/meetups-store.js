import { writable } from 'svelte/store'

const meetups = writable([])

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    setMeetups: (meetupArray) => {
        meetups.set(meetupArray)
    },
    addMeetup: (meetupData) => {
        const newMeetup = {
            ...meetupData,
            // id: Math.random().toString(),
            // // isFavorite: false,
        }
        meetups.update((items) => {
            return [newMeetup, ...items]
        })
    },
    updateMeetup: (id, meetupData) => {
        meetups.update((items) => {
            // Find the meetup with the id
            const meetupIndex = items.findIndex((i) => i.id === id)

            // Create a new meetup object with the new data
            const updatedMeetup = { ...items[meetupIndex], ...meetupData }

            // Create a new array with the updated meetup
            const updatedMeetups = [...items]

            // Replace the old meetup with the new one
            updatedMeetups[meetupIndex] = updatedMeetup

            // Return the new array
            return updatedMeetups
        })
    },
    deleteMeetup: (id) => {
        meetups.update((items) => {
            return items.filter((i) => i.id !== id)
        })
    },
    toggleFavorite: (id) => {
        meetups.update((items) => {
            const updatedMeetup = { ...items.find((m) => m.id === id) }
            updatedMeetup.isFavorite = !updatedMeetup.isFavorite
            const meetupIndex = items.findIndex((m) => m.id === id)
            const updatedMeetups = [...items]
            updatedMeetups[meetupIndex] = updatedMeetup
            return updatedMeetups
        })
    },
}

export default customMeetupsStore
