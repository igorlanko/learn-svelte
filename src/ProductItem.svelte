<script>
	import { createEventDispatcher } from "svelte"
	import Button from "./UI/Button.svelte"

	export let productTitle

	// createEventDispatcher import
	const dispatch = createEventDispatcher()

	// custom emmited events handler
	function addToCart() {
		dispatch("add-to-cart")
	}

	function deleteFromCart() {
		dispatch("delete-from-cart")
	}
</script>

<article>
	<h1>{productTitle}</h1>
	<Button
		type="button"
		kind="primary"
		label="Add to cart"
		on:click={addToCart}
	/>
	<Button
		type="button"
		kind="secondary"
		label="Remove"
		on:click={deleteFromCart}
	/>
</article>
