const router = require('express').Router();

router.use('/autores', require('./api/autoresRoutes'));

module.exports = router;