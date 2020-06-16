 
 <script>
    export let messages = []
 </script>
 
<!-- {#if messages} -->
        {#each messages as message }
            <p>{message}</p>
        {/each}
<!-- {/if} -->