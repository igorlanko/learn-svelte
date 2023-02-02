<script>
	import MeetupItem from './MeetupItem.svelte'

	export let meetups
</script>

<section class="grid grid-cols-2">
	{#each meetups as meetup}
		<MeetupItem
			id={meetup.id}
			title={meetup.title}
			description={meetup.description}
			imageUrl={meetup.imageUrl}
			address={meetup.address}
			email={meetup.email}
			isFavorite={meetup.isFavorite}
			on:show-details
			on:edit-meetup
		/>
	{/each}
</section>
