function createBoard(arrBoards, index) {
  const board = `
    <div class="board" id="${boardCount}">
        <div class="board_top">
          <h2 class="title">${arrBoards[(document.querySelectorAll('.board').length) - 3].name}</h2>
          <div class="board_btns">
            <button class="add" id="${boardCount}">+</button>
            <button class="delete" onclick="deleteBoard(${index})"><img src="icons8-delete-50.png" alt=""></button>
          </div>
        </div>
        <div class="card_wrapper">
        </div>
      </div>
    `

  document.querySelector('.boards_user').innerHTML += board
}


