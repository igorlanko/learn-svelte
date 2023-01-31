<script>
	import { tick } from "svelte"

	import Header from "./UI/Header.svelte"
	import MeetupGrid from "./Meetups/MeetupGrid.svelte"
	import TextInput from "./UI/TextInput.svelte"
	import Button from "./UI/Button.svelte"
	import Modal from "./UI/Modal.svelte"

	// Form capturing
	let title = ""
	let subtitle = ""
	let description = ""
	let imageUrl = ""
	let address = ""
	let email = ""

	let meetups = [
		{
			id: "m1",
			title: "Coding bootcamp",
			subtitle: "Learn the basics of coding",
			description:
				"In this meetup we will have some experts that'll teach you the basics.",
			address: "1299 Hacker Way, Gastonia, SW",
			imageUrl:
				"https://images.unsplash.com/photo-1569773125125-e5af07f13f77?ixid=MnwzODk3MzF8MHwxfHNlYXJjaHwyNnx8c3RlZXR8ZW58MHx8fHwxNjcxMDMyODM2&ixlib=rb-4.0.3",
			email: "donotwritehere@itsfake.com",
		},
		{
			id: "m2",
			title: "Learn how to cook croissants",
			subtitle: "Basics of the DOUGH",
			description:
				"Love croissants but hate to always spend money on it? Why don't you try cooking them yourself!",
			address: "412 Barley St, Gastonia, SW",
			imageUrl:
				"https://images.unsplash.com/photo-1625059349100-b40a85cd9d9c?ixid=MnwzODk3MzF8MHwxfHNlYXJjaHw4fHxidXN5JTIwZXVyb3BlYW4lMjBzdHJlZXR8ZW58MHx8fHwxNjcxMDMzMDI2&ixlib=rb-4.0.3",
			email: "donotwritehere@itsfake.com",
		},
	]

	function addMeetup() {
		const newMeetup = {
			id: Math.random().toString(),
			title: title,
			subtitle: subtitle,
			description: description,
			imageUrl: imageUrl,
			email: email,
			address: address,
		}

		meetups = [newMeetup, ...meetups]
	}

	// Show/hide modal
	let showModal = false

	// Agreeing
	let closeable = false

	let text = "Hello I am text"

	function transformText(event) {
		if (event.which !== 9) {
			return
		}
		event.preventDefault()

		const selectionStart = event.target.selectionStart
		const selectionEnd = event.target.selectionEnd
		const value = event.target.value

		text =
			value.slice(0, selectionStart) +
			value.slice(selectionStart, selectionEnd).toUpperCase() +
			value.slice(selectionEnd)

		tick().then(() => {
			event.target.selectionStart = selectionStart
			event.target.selectionEnd = selectionEnd
		})

		// Won't work
		// event.target.selectionStart = selectionStart
		// event.target.selectionEnd = selectionEnd
	}
</script>

<Header />

<Button
	type="button"
	on:click={() => (showModal = true)}
	label="Show modal"
/>

{#if showModal}
	<Modal
		on:closeModal={() => (showModal = false)}
		let:didAgree={closeable}
	>
		<span slot="header">Hello</span>
		<div slot="footer">
			<Button
				kind="secondary"
				label="Close"
				on:click={() => (showModal = false)}
				disabled={!closeable}
			/>
		</div>
	</Modal>
{/if}

<textarea
	name=""
	id=""
	rows="5"
	value={text}
	on:keydown={transformText}
/>

<div class="container my-4">
	<form
		class="px-2"
		on:submit|preventDefault={addMeetup}
	>
		<TextInput
			controlType="input"
			label="Title"
			id={title}
			value={title}
			type="text"
			on:input={(event) => (title = event.target.value)}
		/>
		<TextInput
			controlType="input"
			label="Subtitle"
			id={subtitle}
			value={subtitle}
			type="text"
			on:input={(event) => (subtitle = event.target.value)}
		/>
		<TextInput
			controlType="input"
			label="Email"
			id={email}
			value={email}
			type="email"
			on:input={(event) => (email = event.target.value)}
		/>
		<TextInput
			controlType="textarea"
			label="Description"
			id={description}
			value={description}
			type="text"
			on:input={(event) => (description = event.target.value)}
		/>
		<Button
			kind="primary"
			type="submit"
			label="Add meetup"
		/>
	</form>

	<MeetupGrid {meetups} />
</div>
