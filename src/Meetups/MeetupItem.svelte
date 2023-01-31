<script>
	import { createEventDispatcher } from "svelte"
	import Badge from "../UI/Badge.svelte"
	const dispatch = createEventDispatcher()

	import Button from "../UI/Button.svelte"

	export let id
	export let title
	export let description
	export let imageUrl
	export let address
	export let email
	export let isFavorite
</script>

<article class="col-span-2 mb-8 pb-2 bg-zinc-100 rounded-3xl overflow-hidden">
	<figure>
		<img
			src={imageUrl}
			alt={title}
		/>
	</figure>
	<header class="px-2 mb-6">
		<h1 class="text-lg font-medium">
			{title}
			{#if isFavorite}
				<Badge>Favorited</Badge>
			{/if}
		</h1>
		<p class="text-sm mb-3">{description}</p>
	</header>
	<footer class="flex gap-x-2 px-2">
		<!-- <Button
			kind="secondary"
			type="button"
		>
				⬇️ Expand
		</Button> -->
		<Button
			kind={isFavorite ? "secondary" : "primary"}
			type="button"
			on:click={() => dispatch("toggle-favorite", id)}
		>
			{isFavorite ? "Unfavorite" : "⭐️ Favorite"}
		</Button>
		<div>
			<p class="text-xs">{address}</p>
			<p class="text-xs">{email}</p>
		</div>
	</footer>
</article>
