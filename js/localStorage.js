function addLocal() {
    localStorage.setItem('Boards', JSON.stringify(arrBoards))
}

function updateLocal() {
    localStorage.setItem('Boards', JSON.stringify(arrBoards))
    saveBoard()

}