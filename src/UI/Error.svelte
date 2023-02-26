<script>
    import Modal from './Modal.svelte'

    export let message
</script>

<Modal
    title="Uh-oh, something went wrong."
    on:cancel
>
    <p>{message}</p>
</Modal>
