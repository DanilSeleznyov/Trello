function createBoard(){
    const board = `
    <div class="board">
    <div class="board_top">
      <h2 class="title">${JSON.parse(localStorage.getItem(`boardName${document.querySelectorAll('.board').length+1}`))}</h2>
      <button class="add">+</button>
    </div>
    <div class="card_wrapper">
    </div>
  </div>
    `

    document.querySelector('.container').innerHTML += board
}