<script>
	import { onDestroy, createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	import meetups from './meetups-store.js'
	import Button from '../UI/Button.svelte'

	let selectedMeetup

	export let id

	const unubscribe = meetups.subscribe((items) => {
		selectedMeetup = items.find((i) => i.id === id)
	})

	onDestroy(() => {
		unubscribe()
	})
</script>

<section class="flex flex-col bg-white h-screen">
	<div>
		<img
			src={selectedMeetup.imageUrl}
			alt={selectedMeetup.title}
		/>
	</div>
	<div class="h-full px-2 mb-6">
		<h1 class="text-lg font-medium">{selectedMeetup.title}</h1>
		<p class="text-sm mb-3">{selectedMeetup.description}</p>
		<p class="text-sm">{selectedMeetup.address}</p>
	</div>
	<div class="flex gap-x-2 px-2 pb-2">
		<Button
			block
			href="mailto:{selectedMeetup.email}"
		>
			Contact
		</Button>
		<Button
			kind="secondary"
			on:click={() => dispatch('close-detail')}
		>
			Close
		</Button>
	</div>
</section>
