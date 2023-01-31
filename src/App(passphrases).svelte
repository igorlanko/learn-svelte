<script>
	// vars
	let enteredPwd = ""
	let fieldValidation = ""
	let savedPwds = [
		{
			enteredPwd: "test123",
		},
	]

	// interacting with the form
	function savePwd() {
		// validation
		if (enteredPwd.trim().length < 5) {
			fieldValidation = "isTooShort"
		} else if (enteredPwd.trim().length > 10) {
			fieldValidation = "isTooLong"
		} else {
			// saving data
			savedPwds = [
				...savedPwds,
				{
					id: Math.random(),
					enteredPwd: enteredPwd,
				},
			]
		}
	}

	// remove passphrase
	function removePwd(index) {
		savedPwds = savedPwds.filter((passphrase, id) => {
			return id !== index
		})
	}
</script>

<main class="h-screen max-w-lg mx-auto p-4">
	<div class="mb-4">
		<h1 class="text-xl">Add new passphrase</h1>
		<div class="flex gap-x-2">
			<input
				class="flex-1 px-1"
				type="password"
				bind:value={enteredPwd}
			/>
			<button
				class="flex items-center bg-slate-800 text-slate-100 px-2 h-8 rounded-lg"
				on:click={savePwd}
			>
				Add new
			</button>
		</div>
		{#if fieldValidation === "isTooShort"}
			<span>Password can't be less than 5 characters.</span>
		{:else if fieldValidation === "isTooLong"}
			<span>Password is too long. No more than 10 characters.</span>
		{/if}
	</div>
	<h1 class="text-xl">Passphrases</h1>
	<ul>
		{#each savedPwds as passphrase, i (passphrase.id)}
			<li class="flex gap-1">
				<span class="flex-1 bg-slate-400">{passphrase.enteredPwd}</span>
				<button on:click={removePwd.bind(this, i)}>Remove</button>
			</li>
		{:else}
			<span>None yet! Start adding passphrases above.</span>
		{/each}
	</ul>
</main>
