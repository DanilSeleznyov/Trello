let arrBoards = []
let arrTasks = []
let taskCount = -1
let boardCount = 2
let btnIndex = 0
let cardIndex;
let cardDragIndex;
let titleId;
// !localStorage.arrBoards ? arrBoards = [] : arrBoards = JSON.parse(localStorage.getItem('Boards'));
if (localStorage.getItem('Boards')) {
    arrBoards = JSON.parse(localStorage.getItem('Boards'))
} else {
    addLocal()
}
if (localStorage.getItem('Tasks')) {
    arrTasks = JSON.parse(localStorage.getItem('Tasks'))
} else {
    addLocalTasks()
}
if (localStorage.getItem('boardIndex')) {
} else {
    localStorage.setItem('boardIndex', boardCount)
}
function saveBoard() {
    boardCount = 2
    document.querySelector('.boards_user').innerHTML = ''
    boardCount = boardCount + 1
    arrBoards = JSON.parse(localStorage.getItem(`Boards`))
    for (let index = 0; index < arrBoards.length; index++, boardCount++) {
        createBoard(arrBoards, boardCount, index)
    }
}

function checkCards() {
    if (localStorage.getItem('Tasks')) {
        document.querySelectorAll('.card').forEach(el => {
            el.addEventListener('dblclick', () => {
                cardIndex = el.id
                showModalDesc(cardIndex)
            })
        })
    }

}

function saveTask() {
    document.querySelectorAll('.card_wrapper').forEach(el => {
        el.innerHTML = ''
    })
    if (localStorage.getItem('taskCount')) {
        taskCount = JSON.parse(localStorage.getItem('taskCount'))
    }
    arrTasks = JSON.parse(localStorage.getItem('Tasks'))
    for (let index = 0; index < arrTasks.length; index++) {
        arrTasks[index].index = index
        taskCount = arrTasks.length
        localStorage.setItem('Tasks', JSON.stringify(arrTasks))
        const card = `
        <div class="card" id="${arrTasks[index].index}" draggable="true">
        <h2 class="card_title">${arrTasks[index].name}</h2>
        <div class="tags_wrapper">${arrTasks[index].tag}</div>
        </div>
        `
        document.querySelectorAll('.card_wrapper')[arrTasks[index].boardIndex].innerHTML += card
        localStorage.setItem('taskCount', JSON.stringify(taskCount))
    }
    checkCards()
}


