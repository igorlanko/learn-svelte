<script>
	import Header from "./UI/Header.svelte"
	import MeetupGrid from "./Meetups/MeetupGrid.svelte"
	import EditMeetup from "./Meetups/EditMeetup.svelte"

	// Show/hide meetup edit
	let editMode = ''

	let meetups = [
		{
			id: "m1",
			title: "Coding bootcamp",
			description:
				"In this meetup we will have some experts that'll teach you the basics.",
			address: "1299 Hacker Way, Gastonia, SW",
			imageUrl: "http://unsplash.it/1024/800?random",
			email: "donotwritehere@itsfake.com",
			isFavorite: false,
		},
		{
			id: "m2",
			title: "Learn how to cook croissants",
			description:
				"Love croissants but hate to always spend money on it? Why don't you try cooking them yourself!",
			address: "412 Barley St, Gastonia, SW",
			imageUrl: "http://unsplash.it/800/600?random",
			email: "donotwritehere@itsfake.com",
			isFavorite: false,
		},
	]

	function addMeetup(event) {
		const newMeetup = {
			id: Math.random().toString(),
			title: event.detail.title,
			description: event.detail.description,
			imageUrl: event.detail.imageUrl,
			email: event.detail.email,
			address: event.detail.address,
			isFavorite: false,
		}

		meetups = [newMeetup, ...meetups]

		editMode = null
	}

	// Show/hide modal
	let showModal = false

	// Agreeing
	let closeable = false

	// Favoriting
	function toggleFavorite(event) {
		const id = event.detail

		// compares the ids and gives back the object that matches
		const updatedMeetup = { ...meetups.find((m) => m.id === id) }

		// toggle the favorite state
		updatedMeetup.isFavorite = !updatedMeetup.isFavorite

		const meetupIndex = meetups.findIndex((m) => m.id === id)
		const updatedMeetups = [...meetups]
		updatedMeetups[meetupIndex] = updatedMeetup
		meetups = updatedMeetups
	}

	// Cancel edit
	function cancelEdit() {
		editMode = null
	}
</script>

<Header newMeetupBtn={() => (editMode = "add")} />

{#if editMode === "add"}
	<EditMeetup
		on:saveMeetup={addMeetup}
		on:cancel={cancelEdit}
	/>
{/if}

<div class="flex flex-col container my-4 gap-y-2">
	<MeetupGrid
		{meetups}
		on:toggle-favorite={toggleFavorite}
	/>
</div>
