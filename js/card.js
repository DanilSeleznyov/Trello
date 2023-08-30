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
        taskCount = JSON.parse(localStorage.getItem('taskCount'))
    }
    taskCount = taskCount + 1
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
    <div class="card" onclick="showModalDesc()" id="${taskCount}">
    <h2 class="card_title">${title}</h2>
    <div class="tags_wrapper">${tagText}</div>
    </div>
    `
    document.querySelectorAll('.board').forEach(el => {
        if (el.id == btnIndex) {
            el.innerHTML += card
        }
    })
    document.querySelector('.modal').remove()
    getBtnId()
}

// if (taskName && taskDescription) {
//     modalTaskInput.value = ''
//     taskDescr.value = ''
//     modalChoose.value = 'Without any tag'
//     deadline.value = ''
//     tasksZone = document.querySelectorAll('.tasks__zone')
//     tasksZone.forEach((element) => {
//         if (btnId == element.id) {
//             tasks.push(
//                 new TaskCon(
//                     taskName,
//                     taskDescription,
//                     taskTag,
//                     taskDate,
//                     taskBoardId,
//                     taskId
//                 )
//             )
//             element.innerHTML += createTasks(taskName, taskTag, taskId)
// function getBtnId() {
// 	createTaskBtns = document.querySelectorAll('.create__task__btn')
// 	createTaskBtns.forEach((el) => {
// 		el.addEventListener('click', () => {
// 			btnId = el.id
// 		})
// 	})
// }