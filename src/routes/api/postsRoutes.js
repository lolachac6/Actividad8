const { selectAllPosts, selectById, insertPosts, changePost, removePost, selectAllPostsFromAutor } = require('../../controllers/posts.controllers');

const router = require('express').Router();

router.get('/', selectAllPosts)
router.get('/:postId',selectById)
router.get('/autor/:autorId', selectAllPostsFromAutor)

router.post('/',insertPosts)
router.put('/:postId', changePost)

router.delete('/:postId',removePost)

module.exports = router;