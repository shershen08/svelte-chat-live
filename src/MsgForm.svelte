<script>
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let text = '';

    let disableFormSeding = true;

    // reactive statement
    $: disableFormSeding = text.length > 5

    const sendMessage = () => {
        // console.log(text)
        dispatch('send', {
            text
        })
        text = ''
    }
</script>
<input bind:value={text} />
<button on:click={sendMessage} disabled={!disableFormSeding}>
    send
</button>
{text}