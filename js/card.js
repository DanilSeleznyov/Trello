function addCard() {
    const card = `
    <div class="card" onclick="showModalDesc()">
    <h2 class="card_title">${document.querySelector('.task_name').value}</h2>
    <div class="tags_wrapper">${document.querySelector('.task_tag').value}</div>
    </div>
    `
    document.querySelectorAll('.card_wrapper')[0].innerHTML += card

}