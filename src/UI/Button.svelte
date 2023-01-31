<script>
	// Styling & formatting
	export let type = "button"
	export let kind = "primary"
	export let size = "md"
	export let disabled = false
	export let block = false

	// Data

	// Size
	let btnMd = "flex h-8 items-center px-2 font-medium rounded-xl"

	// Kind
	let btnPrimary = "bg-green-500 hover:bg-green-700 text-white"
	let btnSecondary =
		"bg-transparent hover:bg-green-500 text-green-700 hover:text-white border border-green-500 hover:border-transparent rounded"

	// Block
	let btnBlock = "w-full"

	// States
	let btnDisabled = "opacity-50 cursor-not-allowed hover:bg-green-500"
</script>

<button
	class="{kind === 'primary'
		? btnPrimary
		: kind === 'secondary'
		? btnSecondary
		: btnSecondary}
	{size === 'md' || 'medium' ? btnMd : btnMd}
	{block ? btnBlock : null}
	{disabled ? btnDisabled : null}
	"
	{type}
	{disabled}
	on:click
>
	<slot />
</button>
