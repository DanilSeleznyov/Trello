function addCard() {
    let taskName = document.querySelector('.task_name').value
    let taskDesc = document.querySelector('.task_desc').value
    let taskTag = document.querySelector('.task_tag').value
    let taskDeadline = document.querySelector('.task_deadline').value
    arrTasks.push([taskName, taskDesc, taskTag, taskDeadline])
    localStorage.setItem('Tasks', JSON.stringify(arrTasks))
    
    const card = `
    <div class="card" onclick="showModalDesc()">
    <h2 class="card_title">${JSON.parse(localStorage.getItem('Tasks'))[0][0]}</h2>
    <div class="tags_wrapper">${JSON.parse(localStorage.getItem('Tasks'))[0][2]}</div>
    </div>
    `
    document.querySelectorAll('.card_wrapper')[0].innerHTML += card
}