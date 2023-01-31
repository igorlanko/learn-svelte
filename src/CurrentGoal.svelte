<script>
    export let goal

    $: isDanger = goal.includes('!')
</script>

<h1>
    Current class goal:
    <span class:text-red-600={isDanger}>
        {goal}
    </span>
    {#if isDanger}
        <span>(in red)</span>
    {/if}
</h1>