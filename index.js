
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!')
})
app.get('/toto', (req, res) => {
  res.send('Hello toto 2!!')
})
const data = require('C:/Users/baphu/OneDrive/Documents/express_my_app/test.json')

app.get('/search', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

