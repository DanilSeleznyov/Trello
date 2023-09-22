function getBtnId() {
    let addBtnsArr = document.querySelectorAll('.add')
    console.log(addBtnsArr);
    addBtnsArr.forEach(el => {
        el.addEventListener('click', () => {
            btnIndex = el.id
            console.log(btnIndex);
            showModalTask(btnIndex)
        })

    })
}



function addCard(btnIndex) {
    if (localStorage.getItem('taskCount')) {
        taskCount = JSON.parse(localStorage.getItem('taskCount'))-1
    }
    taskCount = taskCount+1
    localStorage.setItem('taskCount', JSON.stringify(taskCount))
    arrTasks = JSON.parse(localStorage.getItem('Tasks'))
    let taskName = document.querySelector('.task_name').value
    let taskDesc = document.querySelector('.task_desc').value
    let taskTag = document.querySelector('.task_tag').value
    let taskDeadline = document.querySelector('.task_deadline').value
    arrTasks.push(new TaskObj(btnIndex, taskCount, taskName, taskDesc, taskTag, taskDeadline))
    localStorage.setItem('Tasks', JSON.stringify(arrTasks))
    let title = JSON.parse(localStorage.getItem('Tasks'))[taskCount].name
    let tagText = JSON.parse(localStorage.getItem('Tasks'))[taskCount].tag
    const card = `
    <div class="card" id="${taskCount}" draggable="true">
    <h2 class="card_title">${title}</h2>
    <div class="tags_wrapper">${tagText}</div>
    </div>
    `
    
    document.querySelectorAll('.card_wrapper').forEach(el => {
        if (el.id == btnIndex) {
            el.innerHTML += card
        }
    })
    document.querySelector('.modal').remove()
    getBtnId()
    checkCards()
    getBackgroundColor()
    saveTask()
    dragNdrop()
}


function deleteCard(cardIndex) {
    taskCount = JSON.parse(localStorage.getItem('taskCount'))
    taskCount = taskCount-1
    localStorage.setItem('taskCount', JSON.stringify(taskCount))
    // arrTasks = JSON.parse(localStorage.getItem('Tasks'))
    arrTasks.splice(cardIndex, 1)
    localStorage.setItem('Tasks', JSON.stringify(arrTasks))
    document.querySelector('.modal').remove()
    saveTask()
    getBtnId()
    getBackgroundColor()
}