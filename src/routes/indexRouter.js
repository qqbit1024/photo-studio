const router = require('express').Router();
const IndexController = require('../controllers/indexController');

router.route('/').get(IndexController.indexRender);

module.exports = router;
