const API__URL = `https://randomuser.me/api/?results=${1}`
document.querySelector('.add_user').addEventListener('click', getUsers)
function getUsers() {
    fetch(API__URL).then(resp => resp.json()).then((data) => {
        let users = data.results
        return users.map(user => {
            let userName = `${user.name.first} ${user.name.last}`
            let image = user.picture.thumbnail
            let email = user.email
            const userTemplate = `
                <div class="user">
                <img src="${image}" alt="" class="user_img">
                <p class="user_name">${userName}</p>
                <p class="user_email">${email}</p>
                </div>
                `
                document.querySelector('.users_wrapper').innerHTML += userTemplate
        })
    })

    
}