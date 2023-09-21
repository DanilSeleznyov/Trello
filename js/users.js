const API__URL = `https://randomuser.me/api/?results=${1}`
document.querySelector('.add_user').addEventListener('click', getUsers)
let usersNum = 0
function getUsers() {
    usersNum++
    if (usersNum > 10) {
        return
    }
    fetch(API__URL).then(resp => resp.json()).then((data) => {
        let users = data.results
        return users.map(user => {
            let userName = `${user.name.first} ${user.name.last}`
            let image = user.picture.thumbnail
            let email = user.email

            const userTemplate = `
                <div class="user" onclick="deleteUser()">
                <img src="${image}" alt="" class="user_img">
                <div class="details">
                <p class="user_name">${userName}</p>
                <p class="user_email">${email}</p>
                </div>
                
                </div>
                `
                document.querySelector('.users_wrapper').innerHTML += userTemplate
        })
    })
}

function deleteUser() {
    let usersData = document.querySelectorAll('.user')
    console.log(usersData);
    if (usersData.length > 1) {
        usersData.forEach(el=>{
            el.addEventListener('click', ()=>{
                el.remove()
            })
        })
    }
    
}

