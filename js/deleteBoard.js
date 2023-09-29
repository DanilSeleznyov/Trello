function deleteBoard(index) {
    arrBoards.splice(index, 1)
    updateLocal()
    boardCount = JSON.parse(localStorage.getItem('Boards')).length + 2
    localStorage.setItem('boardIndex', JSON.stringify(boardCount))
    getBackgroundColor()
}
