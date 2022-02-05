const router = require('express').Router()
const clientes = require('./clientes')


module.exports = app => {
  router.get('/', (req,res) => res.send('hola'))
  app.use('/', clientes)
  router.get('***', (req, res) => {
    res.send('Fin')
  })
}