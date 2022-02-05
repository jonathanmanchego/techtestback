const connection = require('../server/config')

const router = require('express').Router()

router.post('/creacliente', async (req, res) => {
    const {
        firstName,
        lastName,
        age,
        birthdate
    } = req.body;
    const newClient = {
        firstName,
        lastName,
        age,
        birthdate
    };
    connection.query('INSERT INTO clientes set ?', [newClient], (errorToSave, results, fields) => {
        if (errorToSave) {
            res.json({
                error: true,
                msg: errorToSave
            });
        }
        res.json({
            error: false,
            data: results,
            fields
        });
    })
})
router.get('/listclientes', (req, res) => {
    res.send('listar')
})
module.exports = router;