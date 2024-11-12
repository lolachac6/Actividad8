const router = require('express').Router();

router.use('/autores', require('./api/autoresRoutes'));
router.use('/posts',require('./api/postsRoutes'));

module.exports = router;