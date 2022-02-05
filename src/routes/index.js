const router = require('express').Router()
const clientes = require('./clientes')


module.exports = app => {
  app.get('/', (req,res) => res.send('hola'))
  app.use('/', clientes)
  app.get('***', (req, res) => {
    res.send('Fin')
  })
}