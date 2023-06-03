export const database = 'vocabular.db'
export const wordsTable = 'words'
const lesson = 'lesson'
export const lessonsTable = 'lessons'
const word = 'word'
const definition = 'definition'
const lessonIdColumn = 'lesson_id'
const lessonNameColumn = 'lesson_name'

export const createWordsTable = `
CREATE TABLE IF NOT EXISTS ${wordsTable} (
  word_id INTEGER PRIMARY KEY AUTOINCREMENT,
  word text,
  definition text,
  lessons_id,
  FOREIGN KEY (lessons_id) REFERENCES lessons (lesson_id)
)`

export const createLessonsTable = `
CREATE TABLE IF NOT EXISTS ${lessonsTable} (
  ${lessonIdColumn} INTEGER PRIMARY KEY AUTOINCREMENT,
  ${lessonNameColumn} TEXT UNIQE
)`

export const insertWord = `
  INSERT INTO ${wordsTable} ( ${word},
  ${definition}, ${lessonIdColumn}) VALUES (?, ?, ?)`

  export const insertOrIgnoreLesson = `
  INSERT OR IGNORE INTO ${lessonsTable} (lesson_name)
  VALUES (?)`