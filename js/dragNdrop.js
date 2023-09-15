let dragableBox = null
function dragNdrop() {
    document.querySelectorAll('.card').forEach(el=>{
        el.addEventListener('dragstart', ()=>{
            dragableBox = el
            cardDragIndex = el.id
            localStorage.setItem('dragIndex', cardDragIndex)
            setTimeout(() => {
                el.style.display = 'none'
            }, 0);
        })
        el.addEventListener('dragend', ()=>{
            setTimeout(() => {
                el.style.display = 'block'
                dragableBox = null
            }, 0);
        })
    })

    document.querySelectorAll('.card_wrapper').forEach(el=>{
        el.addEventListener('dragover', (e)=>{
            e.preventDefault()
        })
        el.addEventListener('dragenter', (e)=>{
            e.preventDefault()
        })
        el.addEventListener('drop', ()=>{
            el.append(dragableBox)
            cardDragIndex = JSON.parse(localStorage.getItem('dragIndex'))
            arrTasks = JSON.parse(localStorage.getItem('Tasks'))
            arrTasks[cardDragIndex].boardIndex = el.id
            localStorage.setItem('Tasks', JSON.stringify(arrTasks))
        })
    })
}

document.addEventListener('DOMContentLoaded', dragNdrop)
