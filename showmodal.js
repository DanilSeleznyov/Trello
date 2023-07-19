function showModalBoard() {
    const modalBoard = `
<div class="modal">
            <h2 class="modal_title">Створити дошку</h2>
           <input type="text" class="board_name" placeholder="Назва дошки"> 
           <button class="create_board">ОК</button>
        </div>
`
document.querySelector('.container').innerHTML += modalBoard
}

