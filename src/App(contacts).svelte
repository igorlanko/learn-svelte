<script>
	import ContactCard from "./ContactCard.svelte"

	let userName = ""
	let jobTitle = ""
	let imageUrl = ""
	let bio = ""

	let formState = "empty"

	let createdContacts = []

	// adding to the list and saving
	function save() {
		if (
			userName.trim().length == 0 ||
			jobTitle.trim().length == 0 ||
			imageUrl.trim().length == 0 ||
			bio.trim().length == 0
		) {
			formState = "invalid"
			console.log("Form invalid.")
		} else {
			createdContacts = [
				...createdContacts,
				{
					id: Math.random(),
					userName: userName,
					jobTitle: jobTitle,
					imageUrl: imageUrl,
					bio: bio,
				},
			]
			formState = "done"
			console.log("Form done.")
		}
	}

	// deleting from the list
	function deleteFirst() {
		createdContacts = createdContacts.slice(1)
	}

	function deleteLast() {
		createdContacts = createdContacts.slice(0, -1)
	}
</script>

<main class="h-screen m-2">
	<div>
		<fieldset>
			<div class="flex flex-col mb-4">
				<label for="userName">Name</label>
				<input
					name="userName"
					type="text"
					bind:value={userName}
				/>
			</div>
			<div class="flex flex-col mb-4">
				<label for="jobTitle">Job title</label>
				<input
					name="jobTitle"
					type="text"
					bind:value={jobTitle}
				/>
			</div>
			<div class="flex flex-col mb-4">
				<label for="imageUrl">Image URL</label>
				<input
					name="imageUrl"
					type="text"
					bind:value={imageUrl}
				/>
			</div>
			<div class="flex flex-col mb-4">
				<label for="bio">Bio</label>
				<textarea
					name="bio"
					bind:value={bio}
				/>
			</div>
		</fieldset>
		<div class="flex items-center">
			<button
				class="flex items-center bg-slate-800 text-slate-100 px-2 h-8 rounded-lg"
				on:click={save}
			>
				Add
			</button>
			<button
				class="flex items-center bg-slate-800 text-slate-100 px-2 h-8 rounded-lg"
				on:click={deleteFirst}
			>
				Delete first
			</button>
			<button
				class="flex items-center bg-slate-800 text-slate-100 px-2 h-8 rounded-lg"
				on:click={deleteLast}
			>
				Delete last
			</button>
		</div>
	</div>

	{#if formState === "invalid"}
		<p>All fields are required.</p>
	{/if}

	{#each createdContacts as contact, i (contact.id)}
		<h2># {i + 1}</h2>
		<ContactCard
			userName={contact.userName}
			jobTitle={contact.jobTitle}
			imageUrl={contact.imageUrl}
			bio={contact.bio}
		/>
	{:else}
		<p>None yet.</p>
	{/each}
</main>
