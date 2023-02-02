<script>
	import Header from './UI/Header.svelte'
	import MeetupGrid from './Meetups/MeetupGrid.svelte'
	import EditMeetup from './Meetups/EditMeetup.svelte'

	// Get data from source
	import meetups from './Meetups/meetups-store.js'

	// Show/hide meetup edit
	let editMode = ''

	function addMeetup(event) {
		// meetups = [newMeetup, ...meetups]
		editMode = null
	}

	// Show/hide modal
	let showModal = false

	// Agreeing
	let closeable = false

	// Cancel edit
	function cancelEdit() {
		editMode = null
	}
</script>

<Header newMeetupBtn={() => (editMode = 'add')} />

{#if editMode === 'add'}
	<EditMeetup
		on:saveMeetup={addMeetup}
		on:cancel={cancelEdit}
	/>
{/if}

<div class="flex flex-col container my-4 gap-y-2">
	<MeetupGrid meetups={$meetups} />
</div>
