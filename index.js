const express = require('express')
const app = express()
port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/teste', (req, res) => {
  res.send('Hello World! Teste')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})