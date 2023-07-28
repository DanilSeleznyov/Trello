function createBoard(arrBoards) {
  const board = `
    <div class="board">
        <div class="board_top">
          <h2 class="title">${arrBoards[(document.querySelectorAll('.board').length) - 3]}</h2>
          <div class="board_btns">
            <button class="add">+</button>
            <button class="delete"><img src="icons8-delete-50.png" alt=""></button>
          </div>
        </div>
        <div class="card_wrapper">
        </div>
      </div>
    `

  document.querySelector('.container').innerHTML += board
}


// document.querySelectorAll('delete').forEach(element => {
//     element.addEventListener('click', deleteBoard)
// })

// function deleteBoard(){
//   arrBoards.indexOf()
//   delete arrBoards[]
// }