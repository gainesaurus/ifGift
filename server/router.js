const Router = require('koa-router');
const router = new Router();
const message = require('./controllers/message'); //various controllers

router.get('/messages', message.getMessages); // the CRUD on each controller
router.post('/messages', message.postMessage);

module.exports = router;
