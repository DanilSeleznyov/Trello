const createBtn = document.querySelector('.create'),
    tagInput = document.querySelector('.tags'),
    settingsBtn = document.querySelector('.settings'),
    addBtns = document.querySelectorAll('.add')
    
createBtn.addEventListener('click', showModalBoard)
addBtns.forEach(el => {
    el.addEventListener('click', showModalTask)
});
