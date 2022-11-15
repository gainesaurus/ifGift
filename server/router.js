const Router = require('koa-router');
const router = new Router();
const profile = require('./controllers/profile');
const lists = require('./controllers/lists')

router.get('/profile', profile.getProfileInfo);
router.post('/profile', profile.insertProfile);
router.put('/profile', profile.updateProfile);

router.get('/mylists', lists.fetchMyLists);
router.post('/mylists', lists.insertList);
// router.put('/myLists', lists.updateList);
// router.delete('/mylists', lists.deleteList);

module.exports = router;
