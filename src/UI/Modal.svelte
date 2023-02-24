<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    // UI
    import Button from './Button.svelte'

    // Animation
    import { fly, fade } from 'svelte/transition'

    export let title = "I'm a modal"

    // Close modal
    function closeModal() {
        dispatch('cancel')
    }
</script>

<div
	class="modal absolute inset-0 flex justify-end flex-col z-20"
>
    <div
		class="modal__container w-full max-w-md md:m-auto px-2 pt-6 pb-2 bg-gray-50"
		transition:fly={{y: 300, duration: 300 }}
	>
        <h1 class="text-xl font-medium mb-2">{title}</h1>
        <div class="modal__content mb-6">
            <slot />
        </div>
        <div class="modal__footer z-10">
            <slot name="footer">
                <Button on:click={closeModal}>Close</Button>
            </slot>
        </div>
    </div>
    <div
        on:click={closeModal}
        on:keydown={closeModal}
        class="modal__overlay absolute inset-0 bg-black opacity-90 -z-10"
		transition:fade={{duration: 180 }}
    />
</div>
