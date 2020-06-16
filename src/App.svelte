<script>
		import { Router, Link, Route } from "svelte-routing";

		import Users from './pages/Users.svelte'
		import Chat from './pages/Chat.svelte'
		import Login from './pages/Home.svelte'

		export let url = '/users';
</script>

<main>
	<header>
		Svelte chat
	</header>



<Router url="{url}">
	<section>
		<Link to="">Login</Link>
		<Link to="users">Users</Link>
		<Link to="chat">Chat</Link>	
	</section>
	
  <div class="main">
    <Route path="" component="{Login}" />
    <Route path="chat" component="{Chat}" />
	<Route path="users" component="{Users}" />
    <Route path="/">
		<Login />
	</Route>
  </div>
</Router>
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