<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    import MeetupFilter from './MeetupFilter.svelte'
    import MeetupItem from './MeetupItem.svelte'

    export let meetups

    // Filter
    let favsOnly = false

    $: filteredMeetups = favsOnly
        ? meetups.filter((m) => m.isFavorite)
        : meetups

    function setFilter(event) {
        favsOnly = event.detail === 1 ? true : false
    }
</script>

<MeetupFilter on:select={setFilter} />

<section class="grid grid-cols-2">
    {#if filteredMeetups.length === 0}
        <p>No meetups yet. Be the first to add one!</p>
    {:else}
        {#each filteredMeetups as meetup (meetup.id)}
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
    {/if}
</section>
