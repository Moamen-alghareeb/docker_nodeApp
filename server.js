const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Hello World!</h1><h4>This a docker container</h4><p>Welcome to my Express server.</p>'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))