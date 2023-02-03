<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	import Button from './Button.svelte'
</script>

<header
	class="sticky top flex justify-between bg-gray-800 px-2 py-2 text-green-400"
>
	<span>Meetups</span>
	<Button on:click={() => dispatch('new-meetup')}>New meetup</Button>
</header>
