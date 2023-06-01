// $(document).ready(function () {


var addButton = document.getElementById("addWordsBulk");
var addOneWord = document.getElementById("addOneWord");
var lessonDropdown = document.getElementById("lessonDropdown")

addButton.addEventListener("click", function () {
    window.open("../add-csv/manage-words.html", "_self");
});

addOneWord.addEventListener("click", function () {
    window.open("../add-one-word/add-one-word.html", "_self");
});



// })