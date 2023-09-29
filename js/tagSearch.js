function addTags() {
    modalTagInput = document.querySelector('.modal_tags')
    if (localStorage.getItem('tags')) {
        tagsArr = JSON.parse(localStorage.getItem('tags'))
    }
    tagsArr.push(modalTagInput.value)
    localStorage.setItem('tags', JSON.stringify(tagsArr))
    modalTagInput.value = ''
}

function selectTags() {
    if (localStorage.getItem('tags')) {
        tagsArr = JSON.parse(localStorage.getItem('tags'))
    }else{
        showModalNoTags()
    }
    for (let i = 0; i < tagsArr.length; i++) {
        if (document.querySelector('.task_tag').value == tagsArr[i]) {
            document.querySelector('.task_tag').style.cssText = 'background:#ffffff;'
            document.querySelector('.task_tag_error').style.display = 'none'
            return
        }else{
            document.querySelector('.task_tag').style.cssText = 'background:#ffa2a2d9;'
            document.querySelector('.task_tag_error').style.display = 'block'
        }   
    }
}

function tagSearch() {
    arrTasks = JSON.parse(localStorage.getItem('Tasks'))
    tagsArr = JSON.parse(localStorage.getItem('tags'))
    arrTasks.forEach(el => {
        if (el.tag == tagInput.value) {
            document.querySelectorAll('.board')[el.boardIndex].style.display = 'none'
        }else{
            document.querySelectorAll('.board')[el.boardIndex].style.display = 'block'
        }
        if(tagInput.value == ''){
            document.querySelectorAll('.board')[el.boardIndex].style.display = 'block'
        }
    });
}
