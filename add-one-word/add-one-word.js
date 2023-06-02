import { addLesson } from "../dataBase/crud.mjs";

var backAddOneWordBtn = document.getElementById('backAddOne');
var addOneBtn = document.getElementById('addWord');

backAddOneWordBtn.addEventListener('click', function(){
    window.open("../welcome/welcome.html", "_self")
})

addOneBtn.addEventListener('click', function(){
    addLesson('Lesson2')
})



