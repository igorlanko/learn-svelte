<script>
	let price = 0
	let agreed = false
	let color = "red"
	let singleColor = "green"
	let userNameInput
	let someDiv 

	$: console.log(price)
	$: console.log(agreed)
	$: console.log(color)
	$: console.log(singleColor)

	function saveData() {
		// console.log(document.querySelector("#userName").value) // vanilla approach
		console.log(userNameInput.value) // svelte approach
		console.dir(someDiv)
	}
</script>

<div class="flex mb-6">
	<input
		type="number"
		bind:value={price}
	/>
</div>

<div class="flex mb-6">
	<input
		id="agree"
		name="terms"
		type="checkbox"
		bind:checked={agreed}
	/>
	<label for="agree">&nbsp;Agree to terms</label>
</div>

<div class="flex flex-col mb-6">
	<label for="red">
		<input
			id="red"
			type="radio"
			value="red"
			name="color"
			bind:group={color}
		/>
		Red
	</label>
	<label for="blue">
		<input
			id="blue"
			type="radio"
			value="blue"
			name="color"
			bind:group={color}
		/>
		Blue
	</label>
	<label for="green">
		<input
			id="green"
			type="radio"
			value="green"
			name="color"
			bind:group={color}
		/>
		Green
	</label>
</div>

<div class="flex flex-col mb-6">
	<select
		name=""
		id=""
		bind:value={singleColor}
	>
		<option value="red">Red</option>
		<option value="blue">Blue</option>
		<option value="green">Green</option>
	</select>
</div>

<div class="flex flex-col mb-6">
	<input
		type="text"
		bind:this={userNameInput}
	/>
	<button on:click={saveData}>Save</button>
</div>

<div bind:this={someDiv}></div>
