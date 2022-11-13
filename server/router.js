const Router = require('koa-router');
const router = new Router();
const profile = require('./controllers/profile');
const lists = require('./controllers/lists')

router.get('/profile', profile.getProfileInfo);
router.post('/profile', profile.insertProfile);

router.get('/mylists', lists.fetchMyLists);
router.post('/mylists', lists.insertList);
router.delete('/mylists');

module.exports = router;
