function deleteBoard(index) {
    arrBoards = JSON.parse(localStorage.getItem('Boards'))
    arrBoards.splice(index, 1)
    updateLocal()


}