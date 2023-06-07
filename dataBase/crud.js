import sqlite3 from 'sqlite3'
import path from 'path'
import url from 'url'

import { createWordsTable, insertOrIgnoreLesson, database, insertWord, createLessonsTable, lessonsTable } from '../constants/consts.js'


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'vocabular.db');
let db = opendb()

function opendb() {
    return new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err);
            throw new Error(err)
        } else {
            console.log('Connected to the database');
        }
    })
}

function createWordsTableIfExist() {
    db.run(createWordsTable, function (err) {
        if (err) {
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
            console.error(err);
        } else {
            console.log(`A new word has been inserted with ID ${this.lastID}`);
        }
    });
}

export function addLesson(lessonName) {
    try {
        db.serialize(() => {
            createLessonsTableIfExist()
            db.run(insertOrIgnoreLesson, lessonName, function (error) {
                if (error) {
                    console.log(error.message)
                } else {
                    console.log(`A new lesson has been inserted with name ${lessonName}`);
                }
            })
        })
    } catch (error) {
        throw new Error(error.message)
    }

}

function createLessonsTableIfExist() {
    try {
        db.run(createLessonsTable)
    } catch (error) {
        throw new Error(error.message)
    }
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
