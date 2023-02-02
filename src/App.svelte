<script>
	import Header from './UI/Header.svelte'
	import MeetupGrid from './Meetups/MeetupGrid.svelte'
	import EditMeetup from './Meetups/EditMeetup.svelte'

	// Get data from source
	import meetups from './Meetups/meetups-store.js'
	import MeetupDetail from './Meetups/MeetupDetail.svelte'

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

	// Meetup detail
	let page = 'meetups'
	let pageData = {}

	function showDetails(event) {
		page = 'details'

		// we get the id from the event detail of MeetupItem and assign it to pageData.id
		pageData.id = event.detail
	}

	function closeDetails() {
		page = 'meetups'
		pageData = {}
	}
</script>

<secti>
	{#if page === 'details'}
		<MeetupDetail
			id={pageData.id}
			on:close-detail={() => (page = 'meetups')}
		/>
	{:else}
		<Header newMeetupBtn={() => (editMode = 'add')} />

		{#if editMode === 'add'}
			<EditMeetup
				on:saveMeetup={addMeetup}
				on:cancel={cancelEdit}
			/>
		{/if}

		<div class="flex flex-col container my-4 gap-y-2">
			<MeetupGrid
				meetups={$meetups}
				on:show-details={showDetails}
				on:close-details={closeDetails}
			/>
		</div>
	{/if}
</secti>
