<script>
    import {loadUsers} from '../services/api'
    let users = []

    const getPromise = () => {
      return new Promise(async (resolve) => {
        users = await loadUsers()
        resolve()
      })
    }

    let usersLoading = getPromise()

</script>
    <h2>Users list</h2>
    {#await usersLoading}
      <p>Loading users...</p>
    {:then value}
     {#each users as user}
        {user}
      {/each}
    {:catch error}
      <p>failed to load users list</p>
    {/await}