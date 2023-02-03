<script>
	import { createEventDispatcher } from "svelte"
	const dispatch = createEventDispatcher()

	import Button from "./Button.svelte"

	export let title = "I'm a modal"

	// Close modal
	function closeModal() {
		dispatch("cancel")
	}
</script>

<div class="modal absolute inset-0 z-20">
	<div class="modal__content max-w-md m-auto px-2 pt-6 pb-2 bg-gray-50">
		<h1 class="text-xl font-medium mb-2">{title}</h1>
		<div class="modal__container mb-6">
			<slot />
		</div>
		<div class="modal__footer z-10">
			<slot name="footer">
				<Button on:click={closeModal}>Close</Button>
			</slot>
		</div>
	</div>
	<div
		on:click={closeModal}
		on:keydown={closeModal}
		class="modal__overlay absolute inset-0 bg-black opacity-90 -z-10"
	/>
</div>
