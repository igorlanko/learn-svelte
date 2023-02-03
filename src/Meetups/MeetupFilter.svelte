<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	import Button from '../UI/Button.svelte'

	let selected = 0
</script>

<section class="flex mt-4 mx-2">
	<Button
		kind={selected === 0 ? 'primary' : 'secondary'}
		block
		on:click={() => {
			selected = 0
			dispatch('select', 0)
		}}
	>
		View all
	</Button>
	<Button
		kind={selected === 1 ? 'primary' : 'secondary'}
		block
		on:click={() => {
			selected = 1
			dispatch('select', 1)
		}}
	>
		favorites
	</Button>
</section>
