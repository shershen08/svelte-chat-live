<script>
    import {setUserName} from '../services/api'
    import { navigate } from "svelte-routing";
        
    let text = ''
    const sendMessage = () => {
        if(text.length > 3) {
            setUserName(text)
            navigate("/chat", { replace: true });
        }
    }
</script>

<h2>
    Login page
</h2>
<input bind:value={text} />
<button on:click={sendMessage}>
    login
</button>