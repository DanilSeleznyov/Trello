const createBtn = document.querySelector('.create'),
    tagInput = document.querySelector('.tags'),
    settingsBtn = document.querySelector('.settings'),
    addBtns = document.querySelectorAll('.add')
    
if (JSON.parse(localStorage.getItem('Boards'))) {
    saveBoard(arrBoards)
}
if(localStorage.getItem('Tasks')){
    saveTask()
}

document.addEventListener('DOMContentLoaded', ()=>{
    if (document.querySelectorAll('.board').length > 3) {
        boardCount = JSON.parse(localStorage.getItem('Boards')).length + 2
        localStorage.setItem('boardIndex', JSON.stringify(boardCount))
    }
    getBtnId()
    getUsers()
    checkCards()
    getBackgroundColor()
    findTitle()
})