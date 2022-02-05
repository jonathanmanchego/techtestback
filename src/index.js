const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));
routes(app)

app.listen(port, () => {
  console.log('BACKEND RUNNING IN ', port);
})
