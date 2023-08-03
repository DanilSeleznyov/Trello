const createBtn = document.querySelector('.create'),
    tagInput = document.querySelector('.tags'),
    settingsBtn = document.querySelector('.settings'),
    addBtns = document.querySelectorAll('.add')
    
createBtn.addEventListener('click', showModalBoard)
if (JSON.parse(localStorage.getItem('Boards'))) {
    saveBoard(arrBoards)
}