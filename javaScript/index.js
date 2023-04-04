'use strict'

const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  const msg = { 'msg': 'It works! Hello world!' };
  res.json(msg);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})