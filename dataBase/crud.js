import sqlite3 from 'sqlite3'
import path from 'path';
import url from 'url';

import { createWordsTable, insertOrIgnoreLesson, database, insertWord, createLessonsTable, lessonsTable } from '../constants/consts.js'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname,'crud', 'vocabular.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
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
            console.log(`Table lessons created or already exists`);
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
        db.run(insertOrIgnoreLesson, lessonName, function (error) {
            if (error) {
                console.error(error);
            } else {
                console.log(`A new lesson has been inserted with ID ${this.lastID}`);
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
