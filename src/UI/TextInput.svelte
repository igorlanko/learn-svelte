<script>
	// Styling & formatting
	export let controlType = null
	export let type = "text"

	// Data
	export let label
	export let id
	export let value
	export let valid = true
	export let validyMsg = ""

	let touched = false
</script>

<div class="flex bg-white border-b px-1">
	<label
		class="w-32 text-slate-600"
		for={id}
	>
		{label}
	</label>
	<div class="flex w-full flex-col">
		{#if controlType === "textarea"}
			<textarea
				class="flex h-12 flex-grow"
				class:invalid={!valid && touched}
				{id}
				bind:value
				on:input
				on:blur={() => (touched = true)}
			/>
		{:else}
			<input
				class="flex-grow h-8"
				class:invalid={!valid && touched}
				{type}
				{id}
				{value}
				on:input
				on:blur={() => (touched = true)}
			/>
		{/if}
		{#if validyMsg && !valid && touched}
			<div class="error-msg mb-4">
				{validyMsg}
			</div>
		{/if}
	</div>
</div>

<style>
	.invalid {
		@apply border border-red-600;
	}

	.error-msg {
		@apply text-red-600;
	}
</style>
