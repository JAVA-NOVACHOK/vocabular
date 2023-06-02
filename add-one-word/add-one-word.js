import { addLesson } from "../dataBase/crud.js";

var backAddOneWordBtn = document.getElementById('backAddOne');
var addOneBtn = document.getElementById('addWord');

backAddOneWordBtn.addEventListener('click', function(){
    window.open("/welcome", "_self")
})

addOneBtn.addEventListener('click', function(){
    const lessonName = $('lessonDropdown').val()
    const wordField =$('wordLanguage').val()
    const description = $('description').val()
    addLesson(lessonName)
})



