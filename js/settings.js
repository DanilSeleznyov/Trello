function getBackgroundColor() {
    if (JSON.parse(localStorage.getItem('bg_color'))) {
        document.querySelector('.header').style.cssText = `background:#${JSON.parse(localStorage.getItem('bg_color'))};`
        document.querySelector('.container').style.cssText = `background:#${JSON.parse(localStorage.getItem('bg_color'))};`
    }
    if (JSON.parse(localStorage.getItem('board_color'))) {
        document.querySelectorAll('.board').forEach(el => {
            el.style.cssText = `background:#${JSON.parse(localStorage.getItem('board_color'))};`
        })
    }
    if (JSON.parse(localStorage.getItem('card_color'))) {
        document.querySelectorAll('.card').forEach(elem => {
            elem.style.cssText = `background:#${JSON.parse(localStorage.getItem('card_color'))};`
        })
    }
}


function setTheme() {
    document.querySelectorAll('.color_bg_item').forEach(el => {
        el.style.cssText = `background:#${el.id};`
        el.addEventListener('click', () => {
            document.querySelector('.header').style.cssText = `background:#${el.id};`
            document.querySelector('.container').style.cssText = `background:#${el.id};`
            localStorage.setItem('bg_color', JSON.stringify(el.id))
        })

    })
    document.querySelectorAll('.color_board_item').forEach(el => {
        el.style.cssText = `background:#${el.id};`
        el.addEventListener('click', () => {
            document.querySelectorAll('.board').forEach(elem => {
                elem.style.cssText = `background:#${el.id};`
                localStorage.setItem('board_color', JSON.stringify(el.id))

            })
        })

    })
    document.querySelectorAll('.color_card_item').forEach(element => {
        element.style.cssText = `background:#${element.id};`
        element.addEventListener('click', () => {
            document.querySelectorAll('.card').forEach(e => {
                e.style.cssText = `background:#${element.id};`
                localStorage.setItem('card_color', JSON.stringify(element.id))

            })
        })
    })
    findTitle()
}