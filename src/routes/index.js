const router = require('express').Router()
const clientes = require('./clientes')


module.exports = app => {
  app.get('/', (req,res) => res.json({error: false, msg: 'hola'}));
  app.use('/', clientes);
  app.get('***', (req, res) => {
    res.send('Fin')
  });
}
