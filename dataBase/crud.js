const { database, insertWord } = require('../constants/consts.js');
import createTableSql, { insertOrIgnoreLesson } from '../constants/consts.js'

const sqlite3 = require('sqlite3').verbose();

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

function addLesson(lesson_name){
    db.run(insertOrIgnoreLesson, [lesson_name], function(err){
        if (err) {
            atert(err.message)
            console.error(err);
        } else {
            console.log(`A new word has been inserted with ID ${this.lastID}`);
        }
    })
}


db.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Database connection closed');
    }
});

export {addLesson}
