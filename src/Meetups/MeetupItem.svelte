<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	// UI
	import Badge from '../UI/Badge.svelte'
	import Button from '../UI/Button.svelte'

	// Animation
	import { scale } from 'svelte/transition'
	import { flip } from 'svelte/animate'

	// Get data
	import meetups from './meetups-store.js'

	// Favorite
	function toggleFavorite() {
		meetups.toggleFavorite(id)
	}

	export let id // forwarding the id from toggleFavorite() to meetups-store.js
	export let title
	export let description
	export let imageUrl
	export let address
	export let email
	export let isFavorite
</script>

<article
	class="relative col-span-2 mb-8 pb-2 bg-zinc-100 rounded-3xl overflow-hidden"
	transition:scale

>
	<div class="absolute left-2 top-2 z-10">
		<Button on:click={() => dispatch('edit-meetup', id)}>Edit</Button>
	</div>
	<a
		href="#"
		class="group cursor-pointer"
		on:click={() => dispatch('show-details', id)}
		on:keydown={() => dispatch('show-details', id)}
	>
		<figure class="overflow-clip">
			<img
				class="group-hover:scale-105"
				src={imageUrl}
				alt={title}
			/>
		</figure>
		<header class="px-2 mb-6">
			<h1 class="group-hover:no-underline underline text-lg font-medium">
				{title}
				{#if isFavorite}
					<Badge>Favorited</Badge>
				{/if}
			</h1>
			<p class="text-sm mb-3">{description}</p>
		</header>
	</a>
	<footer class="flex gap-x-2 px-2">
		<Button
			kind={isFavorite ? 'secondary' : 'primary'}
			type="button"
			on:click={toggleFavorite}
		>
			{isFavorite ? 'Unfavorite' : '⭐️ Favorite'}
		</Button>
		<div>
			<p class="text-xs">{address}</p>
			<p class="text-xs">{email}</p>
		</div>
	</footer>
</article>
