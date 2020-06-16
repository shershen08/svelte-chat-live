<script>
	import {onMount} from 'svelte';

	import MsgList from './MsgList.svelte'
	import MsgForm from './MsgForm.svelte'

	import {testWebSocket} from './ws'

	export let name;
	let websocket;

	const sendMessage = ({detail}) => {
		// console.log(detail.text)
		websocket.send(detail.text)
	}

	let messages = []

	onMount(() => {
		websocket = testWebSocket()
		websocket.onmessage = ({data}) => {
			console.log(data)
			messages = [...messages, data]
		}
	})

	
</script>

<main>
	<header>
		Svelte chat
	</header>
	<MsgList messages={messages}/>
	<MsgForm on:send={sendMessage}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>