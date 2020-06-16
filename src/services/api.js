export const loadUsers = () => {
                // todo ..
                //http://737b8607c714.ngrok.io/api/users
    return fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
}

export const setUserName = (username) => {
return fetch(`http://737b8607c714.ngrok.io/api/profile?id=1&name=${username}`, {
  type: 'post',
})
.then(response => response.json())
}