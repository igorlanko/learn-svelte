<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	// Get data
	import meetups from './meetups-store.js'

	// UI
	import TextInput from '../UI/TextInput.svelte'
	import Button from '../UI/Button.svelte'
	import Modal from '../UI/Modal.svelte'

	// Validation
	import { isEmpty, isValidEmail } from '../helpers/validation.js'

	// Form capturing
	let title = ''
	let description = ''
	let email = ''
	let imageUrl = 'http://unsplash.it/1024/600?random'
	let address = ''

	// Editing existing meetup
	export let id = null
	if (id) {
		const ubsubscribe = meetups.subscribe((items) => {
			const selectedMeetup = items.find((i) => i.id === id)
			title = selectedMeetup.title
			description = selectedMeetup.description
			email = selectedMeetup.email
			imageUrl = selectedMeetup.imageUrl
			address = selectedMeetup.address
		})

		ubsubscribe()
	}

	// Validation
	// We use $: to make sure that the validation is triggered
	// when the value of the variable changes.
	// {isValid} variables are created by Svelte.
	$: imageUrlIsValid = !isEmpty(imageUrl)
	$: titleIsValid = !isEmpty(title)
	$: emailIsValid = isValidEmail(email)
	$: descriptionIsValid = !isEmpty(description)
	$: addressIsValid = !isEmpty(address)
	$: formIsValid =
		imageUrlIsValid &&
		titleIsValid &&
		emailIsValid &&
		descriptionIsValid &&
		addressIsValid

	// Passing data to parent component
	function submitForm() {
		// Create meetup object
		const meetupData = {
			title: title,
			description: description,
			imageUrl: imageUrl,
			email: email,
			address: address,
		}

		// Add meetup to store
		// If id is passed, we are editing an existing meetup
		if (id) {
			meetups.updateMeetup(id, meetupData)
			// Otherwise, we are creating a new meetup
		} else {
			meetups.addMeetup(meetupData)
		}

		// Dispatching event to parent component to close modal
		dispatch('saveMeetup')
	}

	function cancel() {
		dispatch('cancel')
	}

	function deleteMeetup() {
		meetups.deleteMeetup(id)
		dispatch('cancel')
	}
</script>

<Modal
	title={id ? 'Edit meetup' : 'Add meetup'}
	on:cancel
>
	<form on:submit|preventDefault={submitForm}>
		<TextInput
			controlType="input"
			label="Cover URL"
			id={imageUrl}
			value={imageUrl}
			valid={imageUrlIsValid}
			validyMsg="URL is not valid."
			on:input={(event) => (imageUrl = event.target.value)}
		/>
		<TextInput
			controlType="input"
			label="Title"
			id={title}
			value={title}
			valid={titleIsValid}
			validyMsg="Enter a valid title."
			on:input={(event) => (title = event.target.value)}
		/>
		<TextInput
			controlType="input"
			label="Email"
			id={email}
			value={email}
			type="email"
			valid={emailIsValid}
			validyMsg="Enter a valid email."
			on:input={(event) => (email = event.target.value)}
		/>
		<TextInput
			controlType="textarea"
			label="Description"
			id={description}
			bind:value={description}
			valid={descriptionIsValid}
			validyMsg="Enter a valid description."
		/>
		<TextInput
			controlType="textarea"
			label="Address"
			id={address}
			bind:value={address}
			valid={addressIsValid}
			validyMsg="Enter a valid address."
		/>
	</form>
	<div
		class="flex gap-2"
		slot="footer"
	>
		<Button
			kind="secondary"
			on:click={cancel}>Cancel</Button
		>
		{#if id}
			<Button
				kind="secondary"
				on:click={deleteMeetup}>Delete</Button
			>
		{/if}
		<Button
			block={true}
			kind="primary"
			type="button"
			on:click={submitForm}
			disabled={!formIsValid}
		>
			{id ? 'Update meetup' : 'Add meetup'}
		</Button>
	</div>
</Modal>
