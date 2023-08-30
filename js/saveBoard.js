let arrBoards = []
let arrTasks = []
let taskCount = -1
let boardCount = 1
let btnIndex = 0
// !localStorage.arrBoards ? arrBoards = [] : arrBoards = JSON.parse(localStorage.getItem('Boards'));
if (localStorage.getItem('Boards')) {
    arrBoards = JSON.parse(localStorage.getItem('Boards'))
}else{
    addLocal()
}
if (localStorage.getItem('Tasks')) {
    arrTasks = JSON.parse(localStorage.getItem('Tasks'))
}else{
    addLocalTasks()
}
function saveBoard() {
    document.querySelector('.boards_user').innerHTML = ''
    arrBoards = JSON.parse(localStorage.getItem(`Boards`))
    boardCount = boardCount+1
    for (let index = 0; index < arrBoards.length; index++, boardCount++) {
        createBoard(arrBoards, index)
    }
}

function saveTask() {
    document.querySelectorAll('.card_wrapper').forEach(el=>{
        el.innerHTML = ''
    })
    arrTasks = JSON.parse(localStorage.getItem('Tasks'))
    for (let index = 0; index < arrTasks.length; index++) {
        arrTasks[index].boardIndex
        //перебор объекта arrTasks
        
    }
}

  
  