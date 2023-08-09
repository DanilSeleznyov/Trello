let arrBoards = []
!localStorage.arrBoards ? arrBoards = [] : arrBoards = JSON.parse(localStorage.getItem('Boards'));
addLocal()
function saveBoard() {
    document.querySelector('.boards_user').innerHTML = ''
    arrBoards = JSON.parse(localStorage.getItem(`Boards`))
    for (let index = 0; index < arrBoards.length; index++) {
        createBoard(arrBoards)

    }


}

