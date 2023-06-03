import sqlite3 from 'sqlite3'
// import mysql from 'websql'
import { createTableSql, insertOrIgnoreLesson, database, insertWord } from '../constants/consts.js'
// const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(database, (err) => {
    if (err) {
        alert(err.message)
        console.error(err);
    } else {
        console.log('Connected to the database');
    }
});

function createTableIfExist() {
    db.run(createTableSql, function (err) {
        if (err) {
            alert(err)
            console.error(err.message);
        } else {
            console.log('Users table created or already exists');
        }
    });
}

function addWord(lesson, word, definition) {
    const values = [lesson, word, definition]
    db.run(insertWord, values, function (err) {
        if (err) {
            atert(err.message)
            console.error(err);
        } else {
            console.log(`A new word has been inserted with ID ${this.lastID}`);
        }
    });
}

// export function addLesson(lesson_name) {

//     const lessonName = $('lessonDropdown').val()
//     const wordField = $('wordLanguage').val()
//     const description = $('description').val()
//     addLesson(lessonName)
//     db.run(insertOrIgnoreLesson, [lesson_name], error => {
//         if (error) {
//             atert(error.message)
//             console.error(error);
//         } else {
//             console.log(`A new word has been inserted with ID ${this.lastID}`);
//         }
//     })
// }


function closeDb() {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Database connection closed');
        }
    })
}

// export { addLesson }
