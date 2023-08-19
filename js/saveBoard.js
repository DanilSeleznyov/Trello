let arrBoards = []
let arrTasks = []
// !localStorage.arrBoards ? arrBoards = [] : arrBoards = JSON.parse(localStorage.getItem('Boards'));
if (localStorage.getItem('Boards')) {
    arrBoards = JSON.parse(localStorage.getItem('Boards'))
}else{
    addLocal()
}
if (localStorage.getItem('Tasks')) {
    arrBoards = JSON.parse(localStorage.getItem('Tasks'))
}else{
    addLocalTasks()
}
function saveBoard() {
    document.querySelector('.boards_user').innerHTML = ''
    arrBoards = JSON.parse(localStorage.getItem(`Boards`))
    for (let index = 0; index < arrBoards.length; index++) {
        createBoard(arrBoards)
    }
}



  
  