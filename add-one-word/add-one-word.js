
var backAddOneWordBtn = document.getElementById('backAddOne');
var addOneWordBtn = document.getElementById('addWord');
const addOneWordForm = document.getElementById('addOneWordForm')

backAddOneWordBtn.addEventListener('click', function () {
    window.open("/welcome", "_self")
})

addOneWordForm.addEventListener('submit', event => {
    event.preventDefault()
    submitForm(addOneWordForm)
})

function submitForm(form) {
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    fetch('/add-word', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .catch(error => {
        console.log(error)
    })
}



