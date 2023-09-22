function findTitle() {
    document.querySelectorAll('.title').forEach(el=>{
    el.addEventListener('dblclick', ()=>{
        if (el.id <= 2) {
            return
        }
        titleId = el.id
        changeBoardTitle(titleId, el)
    })
})
}

function changeBoardTitle(titleId, el) {
    el.innerHTML = `<input type="text" class="new_board_title" placeholder="Інша назва..."><button class="modal_btn new_board_title_btn">OK</button>`
document.querySelectorAll('.title').forEach(elem=>{
    elem.addEventListener('dblclick', ()=>{
        saveBoard()
        findTitle()
        saveTask()
        getBackgroundColor()
    })
})
document.querySelector('.new_board_title_btn').addEventListener('click', ()=>{
    // if (document.querySelector('.new_board_title').value == '') {
    //     el.style.cssText = 'background:rgb(207, 20, 20, 0.4);'
    // }else{
    //     el.style.cssText = 'background:none;'
    // }
    arrBoards = JSON.parse(localStorage.getItem('Boards'))
    const inputTitle = document.querySelector('.new_board_title')
    console.log(titleId);
    arrBoards[titleId-3].name = inputTitle.value
    localStorage.setItem('Boards', JSON.stringify(arrBoards))
    saveBoard()
    saveTask()
    findTitle()
    getBackgroundColor()
})
}

