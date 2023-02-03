import { writable } from 'svelte/store'

const meetups = writable([
	{
		id: 'm1',
		title: 'Coding bootcamp',
		description:
			"In this meetup we will have some experts that'll teach you the basics.",
		imageUrl: 'http://unsplash.it/1024/800?random',
		email: 'donotwritehere@itsfake.com',
		address: '1299 Hacker Way, Gastonia, SW',
		isFavorite: false,
	},
	{
		id: 'm2',
		title: 'Learn how to cook croissants',
		description:
			"Love croissants but hate to always spend money on it? Why don't you try cooking them yourself!",
		imageUrl: 'http://unsplash.it/800/600?random',
		email: 'donotwritehere@itsfake.com',
		address: '412 Barley St, Gastonia, SW',
		isFavorite: false,
	},
])

const customMeetupsStore = {
	subscribe: meetups.subscribe,
	addMeetup: (meetupData) => {
		const newMeetup = {
			...meetupData,
			id: Math.random().toString(),
			isFavorite: false,
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
			const updatedMeetup = { ...items[meetupIndex], meetupData }
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
