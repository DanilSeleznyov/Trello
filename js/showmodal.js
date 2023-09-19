function BoardObj(index, name) {
    this.name = name
    this.id = index
}
function TaskObj(boardIndex, index, name, desc, tag, deadline) {
    this.boardIndex = boardIndex
    this.index = index
    this.name = name
    this.desc = desc
    this.tag = tag
    this.deadline = deadline
}

function showModalBoard() {
    const modalBoard = `
        <div class="modal">
            <h2 class="modal_title">Створити дошку</h2>
           <input type="text" class="board_name" placeholder="Назва дошки"> 
           <button class="create_board">ОК</button>
           <p class="board_error">Введіть назву дошки!</p>
           <p class="board_error_2">Така дошка вже є!</p>
        </div>
`
    document.querySelector('.container').innerHTML += modalBoard
    document.querySelector('.create_board').addEventListener('click', () => {
        if (localStorage.getItem('Boards') != undefined) {
            arrBoards = JSON.parse(localStorage.getItem('Boards'))
        }
        if (document.querySelector('.board_name').value != '') {
            if ((arrBoards.includes(`${document.querySelector('.board_name').value}`, 0)) == true) {
                document.querySelector('.board_error_2').style.display = 'block'
                document.querySelector('.board_error').style.display = 'none'
            } else {
                if (localStorage.getItem('boardIndex')) {
                    boardCount = JSON.parse(localStorage.getItem('boardIndex'))
                }
                let boardName = document.querySelector('.board_name').value
                boardCount = boardCount + 1
                arrBoards.push(new BoardObj(boardCount, boardName))
                localStorage.setItem(`Boards`, JSON.stringify(arrBoards))
                localStorage.setItem('boardIndex', JSON.stringify(boardCount))
                document.querySelector('.modal').remove()
                createBoard(arrBoards, boardCount)
                getBtnId()
            }

        } else {
            document.querySelector('.board_error').style.display = 'block'
            document.querySelector('.board_error_2').style.display = 'none'
        }
    })
}

function showModalTask(btnIndex) {
    const modalTask = `
      <div class="modal modal_task">     
        <h2 class="modal_title">Створити завдання</h2>
        <input type="text" class="modal_input task_name" placeholder="Назва завдання"> 
        <input type="text" class="modal_input task_desc" placeholder="Опис завдання"> 
        <input type="text" class="modal_input task_tag" placeholder="Тег завдання"> 
        <input type="text" class="modal_input task_deadline" placeholder="Строк завдання"> 
        <button class="modal_btn create_task" onclick="addCard(${btnIndex})">ОК</button>
      </div>                           
    `
    document.querySelector('.container').innerHTML += modalTask

}


function showModalDesc(cardIndex) {
    const modalDesc = `
    <div class="modal modal_desc">
    <h2 class="modal_desc_label">Детальніше</h2>
    <p class="modal_desc_task">${JSON.parse(localStorage.getItem('Tasks'))[cardIndex].desc}</p>
    <p class="modal_desc_deadline">${JSON.parse(localStorage.getItem('Tasks'))[cardIndex].deadline}</p>
    <button class="modal_btn modal_desc_close">OK</button>
    <button class="modal_btn modal_desc_delete" onclick="deleteCard(${cardIndex})">Delete</button>
  </div>
    `
    document.querySelector('.container').innerHTML += modalDesc
    document.querySelector('.modal_desc_close').addEventListener('click', () => {
        document.querySelector('.modal').remove()
        checkCards()
        getBtnId()
    })
}

function showModalSettings() {
    const modalSettings = `
    <div class="modal modal_settings">
        <h2 class="modal_title">Налаштування</h2>
        <p class="input_label">Теги</p>
        <input type="text" class="modal_input modal_tags" placeholder="tags...">
        <button class="modal_btn modal_settings_btn">OK</button>
        <p class="input_label">Колір фону</p>
        <div class="color_item_wrapper">
            <div class="color_item color_bg_item" id="04a061"></div>
            <div class="color_item color_bg_item" id="cf1414"></div>
            <div class="color_item color_bg_item" id="00c4ff"></div>
            <div class="color_item color_bg_item" id="a900ff"></div>
            <div class="color_item color_bg_item" id="ff6fcc"></div>
            <div class="color_item color_bg_item" id="a5a7a9"></div>
        </div>
        <p class="input_label">Колір дошок</p>
        <div class="color_item_wrapper">
            <div class="color_item color_board_item" id="fdc827"></div>
            <div class="color_item color_board_item" id="ff6060"></div>
            <div class="color_item color_board_item" id="8958ff"></div>
            <div class="color_item color_board_item" id="ffffff"></div>
            <div class="color_item color_board_item" id="ffc5ea"></div>
            <div class="color_item color_board_item" id="818181"></div>
        </div>
        <p class="input_label">Колір карток</p>
        <div class="color_item_wrapper">
            <div class="color_item color_card_item" id="000000"></div>
            <div class="color_item color_card_item" id="026800"></div>
            <div class="color_item color_card_item" id="0088b1"></div>
            <div class="color_item color_card_item" id="a900ff"></div>
            <div class="color_item color_card_item" id="04454d"></div>
            <div class="color_item color_card_item" id="a5a7a9"></div>
        </div>
        <button class="modal_btn settings_btn_close">Close</button>
      </div>
    `
    document.querySelector('.container').innerHTML += modalSettings

    document.querySelectorAll('.color_bg_item').forEach(el=>{
        el.style.cssText = `background:#${el.id};`
        el.addEventListener('click', ()=>{
            document.querySelector('.header').style.cssText = `background:#${el.id};`
            document.querySelector('.container').style.cssText = `background:#${el.id};`
        })
        
    })
    document.querySelectorAll('.color_board_item').forEach(el=>{
        el.style.cssText = `background:#${el.id};`
        el.addEventListener('click', ()=>{
            document.querySelectorAll('.board').forEach(elem=>{
                elem.style.cssText = `background:#${el.id};`
            })
        })
        
    })
    document.querySelectorAll('.color_card_item').forEach(element=>{
        element.style.cssText = `background:#${element.id};`
        element.addEventListener('click', ()=>{
            document.querySelectorAll('.card').forEach(e=>{
                e.style.cssText = `background:#${element.id};`
            })
        })
        
    })

    document.querySelector('.settings_btn_close').addEventListener('click', ()=>{
        document.querySelector('.modal').remove()
    })
}