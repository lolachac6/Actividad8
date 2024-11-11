const { selectAllPosts, selectById, insertPosts, changePosts } = require('../../controllers/posts.controllers');

const router = require('express').Router();

router.get('/', selectAllPosts)
router.get('/:postId',selectById)

router.post('/',insertPosts)
router.put('/:postId', changePosts)

module.exports = router;