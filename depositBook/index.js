const express = require('express')

const app = express()

app.use(express.static('all/html'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/all/html/start.html')
})

app.get('/5class', (req, res) => {
    res.sendFile(__dirname + '/all/html/5class.html')
})

app.get('/6class', (req, res) => {
    res.sendFile(__dirname + '/all/html/6class.html')
})

app.get('/7class', (req, res) => {
    res.sendFile(__dirname + '/all/html/7class.html')
})

app.get('/8class', (req, res) => {
    res.sendFile(__dirname + '/all/html/8class.html')
})

app.get('/9class', (req, res) => {
    res.sendFile(__dirname + '/all/html/9class.html')
})

app.get('/10class', (req, res) => {
    res.sendFile(__dirname + '/all/html/10class.html')
})

app.get('/11class', (req, res) => {
    res.sendFile(__dirname + '/all/html/11class.html')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Сервер вроде как фуртычит: http://localhost:${PORT}`)
})