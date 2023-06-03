import sqlite3 from 'sqlite3'
// import mysql from 'websql'
import { createWordsTable, insertOrIgnoreLesson, database, insertWord, createLessonsTable, lessonsTable } from '../constants/consts.js'
// const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(database, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to the database');
    }
});

function createWordsTableIfExist() {
    db.run(createWordsTable, function (err) {
        if (err) {
            alert(err)
            console.error(err.message);
        } else {
            console.log('Users table created or already exists');
        }
    });
}

function createLessonsTableIfExist() {
    db.run(createLessonsTable, function (err) {
        if (err) {
            alert(err)
            console.error(err.message);
        } else {
            console.log(`Table ${lessonsTable} created or already exists`);
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

export function addLesson(lessonName) {
    db.serialize(() => {
        createLessonsTableIfExist()
        db.run(insertOrIgnoreLesson, [lessonName], function (error) {
            if (error) {
                console.error(error);
            } else {
                console.log(`A new word has been inserted with ID ${this.lastID}`);
            }
        }.bind(db))
        closeDb()
    })

}


export function closeDb() {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Database connection closed');
        }
    })
}

// export { addLesson }
