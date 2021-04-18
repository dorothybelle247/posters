const express = require('express');
const {getPosts, createPost} = require('../controllers/posts.js')
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

// router.get('/', (req, res) => {

// })

module.exports = router;
// export default router;