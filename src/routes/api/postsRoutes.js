const { selectAllPosts, selectById, insertPosts } = require('../../controllers/posts.controllers');

const router = require('express').Router();

router.get('/', selectAllPosts)
router.get('/:postId',selectById)

router.post('/',insertPosts)

module.exports = router;