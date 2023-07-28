let arrBoards = []
function saveBoard() {
    arrBoards = JSON.parse(localStorage.getItem(`Boards`))
    for (let index = 0; index < arrBoards.length; index++) {
        createBoard(arrBoards)

    }


}

