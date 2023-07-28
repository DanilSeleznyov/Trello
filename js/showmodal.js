function showModalBoard() {
    const modalBoard = `
        <div class="modal">
            <h2 class="modal_title">Створити дошку</h2>
           <input type="text" class="board_name" placeholder="Назва дошки"> 
           <button class="create_board">ОК</button>
        </div>
`
document.querySelector('.container').innerHTML += modalBoard
document.querySelector('.create_board').addEventListener('click', ()=>{
    if(localStorage.getItem('Boards') != undefined){
        arrBoards = JSON.parse(localStorage.getItem('Boards'))
    }
    arrBoards.push(document.querySelector('.board_name').value)
    localStorage.setItem(`Boards`, JSON.stringify(arrBoards))
    document.querySelector('.modal').remove()
    createBoard(arrBoards)
})
}

function showModalTask() {
    const modalTask = `
    <div class="modal modal_task">
        <h2 class="modal_title">Створити завдання</h2>
        <input type="text" class="modal_input task_name" placeholder="Назва завдання"> 
        <input type="text" class="modal_input task_desc" placeholder="Опис завдання"> 
        <input type="text" class="modal_input task_tag" placeholder="Тег завдання"> 
        <input type="text" class="modal_input task_deadline" placeholder="Строк завдання"> 
        <button class="modal_btn create_task">ОК</button>
      </div>
    `
    
    document.querySelector('.container').innerHTML += modalTask
    document.querySelector('.create_task').addEventListener('click', ()=>{
        document.querySelector('.modal').remove()
    })
}