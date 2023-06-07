import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import url from 'url'
import { addLesson } from './dataBase/crud.js'


const app = express()
app.use(bodyParser.json())
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
    try {
        const payload = req.body
        const lessonName = payload.state
        addLesson(payload.state)
        res.send({ message: `The word ${payload.word} in lesson ${lessonName} was successfully added` })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.use((err, req, res, next) => {
//     console.error('Global error handler:', err);
//     res.status(500).send({ message: 'Internal Server Error' });
//   });