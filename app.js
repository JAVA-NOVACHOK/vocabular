import express from 'express'
// import { addLesson } from "./dataBase/crud.js"
import path from 'path'
import url from 'url'
const app = express()
const port = 3000

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'welcome', 'welcome.html'))
})

app.get('/add-csv', (req, res) => {
    res.sendFile(path.join(__dirname, 'add-csv', 'manage-words.html'))
})

app.get('/add-one-word', (req, res) => {
    res.sendFile(path.join(__dirname, 'add-one-word', 'add-one-word.html'))
})

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'welcome', 'welcome.html'))
})

app.post('/add-word', (req, res) => {
    const payload = req.body
    console.log(payload)
})

// app.post('/add-word', (req, res) => {
//     addLesson()
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})