<script>
    export let userName
	export let jobTitle
	export let bio
	export let imageUrl
</script>

<div class="p-1 bg-zinc-50 mb-4">
    <header>
        <div class:hidden={!imageUrl}>
            <img src={imageUrl} alt="{userName}'s photo" />
        </div>
        <div>
            <h1 class="text-lg">{userName}</h1>
            <h2 class="text-md">{jobTitle}</h2>
        </div>
    </header>
    <main class="mt-4">
        <p class="text-sm">{bio}</p>
        <div class="flex"></div>
    </main>
</div>