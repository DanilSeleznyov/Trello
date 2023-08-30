function addLocal() {
    localStorage.setItem('Boards', JSON.stringify(arrBoards))
}
function addLocalTasks() {
    localStorage.setItem('Tasks', JSON.stringify(arrTasks))

}

function updateLocal() {
    localStorage.setItem('Boards', JSON.stringify(arrBoards))
    saveBoard()
}