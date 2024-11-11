const router = require('express').Router();

const { getOneAutor, changeAutor, insertAutor, selectAllAutores, removeAutor } = require('../../controllers/autores.controllers');


router.get('/', selectAllAutores )
router.get('/:autorId', getOneAutor)

router.post('/',insertAutor)
router.put('/:autorId',changeAutor)

router.delete('/:autorId',removeAutor)

module.exports = router;