<script>
	import Button from "./Button.svelte";

	export let newMeetupBtn
</script>

<header class="sticky top flex justify-between bg-gray-800 px-2 py-2 text-green-400">
	<span>Meetups</span>
	<Button on:click={newMeetupBtn}>New meetup</Button>
</header>
