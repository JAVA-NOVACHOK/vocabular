export const database = 'vocabular.db'
export const table = 'words'
const lesson = 'lesson'
const lessonsTable = 'lessons'
const word = 'word'
const definition = 'definition'
const lessonIdColumn = 'lesson_id'
const lessonNameColumn = 'lesson_name'

export const createTableSql = `
  CREATE TABLE IF NOT EXISTS ${table} (
    word_id INTEGER PRIMARY KEY AUTOINCREMENT,
    lesson TEXT,
    word TEXT,
    definition TEXT
  )`
export const insertWord = `
  INSERT INTO ${table} (${lesson}, ${word},
  ${definition}) VALUES (?, ?, ?)`

  export const insertOrIgnoreLesson = `
  INSERT OR IGNORE INTO ${lessonsTable} (lesson_name)
  VALUES (?);`