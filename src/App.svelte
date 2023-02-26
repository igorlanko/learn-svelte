<script>
    import Header from './UI/Header.svelte'
    import MeetupGrid from './Meetups/MeetupGrid.svelte'
    import EditMeetup from './Meetups/EditMeetup.svelte'

    // Get data from source
    import meetups from './Meetups/meetups-store.js'
    import MeetupDetail from './Meetups/MeetupDetail.svelte'
    import LoadingSpinner from './UI/LoadingSpinner.svelte'

    // Show/hide meetup edit
    let editMode = ''
    let editedId = null

    // Loading meetups
    let isLoading = true

    fetch('https://learn-svelte-4835a-default-rtdb.firebaseio.com/meetups.json')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Something went wrong.')
            }
            return res.json()
        })
        .then((data) => {
            const loadedMeetups = []
            for (const key in data) {
                loadedMeetups.push({
                    ...data[key],
                    id: key,
                })
            }
            setTimeout(() => {
                isLoading = false
                meetups.setMeetups(loadedMeetups)
            }, 1000)
        })
        .catch((err) => {
            isLoading = false
            console.log(err)
        })

    function savedMeetup(event) {
        // meetups = [newMeetup, ...meetups]
        editMode = null
        editedId = null
    }

    // Editing meetup
    function startEdit(event) {
        editMode = 'edit'
        editedId = event.detail
    }

    // Show/hide modal
    let showModal = false

    // Agree to conditions
    let closeable = false

    // Cancel edit
    function cancelEdit() {
        editMode = null
        editedId = null
    }

    // Meetup detail
    let page = 'meetups'
    let pageData = {}

    function showDetails(event) {
        page = 'details'

        // we get the id from the event detail of MeetupItem and assign it to pageData.id
        pageData.id = event.detail
    }

    function closeDetails() {
        page = 'meetups'
        pageData = {}
    }
</script>

<section>
    {#if page === 'details'}
        <MeetupDetail
            id={pageData.id}
            on:close-detail={() => (page = 'meetups')}
        />
    {:else}
        <Header on:new-meetup={() => (editMode = 'edit')} />

        {#if editMode === 'edit'}
            <EditMeetup
                on:saveMeetup={savedMeetup}
                on:cancel={cancelEdit}
                id={editedId}
            />
        {/if}

        <div class="max-w-md m-auto flex flex-col container my-4 gap-y-2">
            {#if isLoading}
                <LoadingSpinner />
            {:else}
                <MeetupGrid
                    meetups={$meetups}
                    on:show-details={showDetails}
                    on:close-details={closeDetails}
                    on:edit-meetup={startEdit}
                />
            {/if}
        </div>
    {/if}
</section>
