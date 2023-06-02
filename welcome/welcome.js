
const addButton = document.getElementById("addWordsBulk");
const addOneWord = document.getElementById("addOneWord")

addButton.addEventListener('click', openAddCsv)
addOneWord.addEventListener('click', openAddOneWord)

function openAddCsv() {
    window.open('/add-csv', '_self')
}

function openAddOneWord(){
    window.open('/add-one-word', '_self')
}




// })