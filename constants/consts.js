export const database = 'vocabular.db'
export const table = 'words'
const lesson = 'lesson'
const word = 'word'
const definition = 'definition'

export const createTableSql = `
  CREATE TABLE IF NOT EXISTS ${table} (
    word_id INTEGER PRIMARY KEY AUTOINCREMENT,
    lesson TEXT,
    word TEXT,
    definition TEXT
  )`
export const insertWord = `INSERT INTO ${table} (${lesson}, ${word}, ${definition}) VALUES (?, ?, ?)`