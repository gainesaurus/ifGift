const Router = require('koa-router');
const router = new Router();
const profile = require('./controllers/profile');
const lists = require('./controllers/lists')

router.get('/allprofiles', profile.getAllProfiles);
router.get('/profile', profile.getProfileInfo);
router.post('/profile', profile.insertProfile);
router.put('/profile', profile.updateProfile);

router.get('/mylists/:userId', lists.fetchMyLists);
router.post('/mylists/:userId', lists.insertList); 
router.put('/myLists/:id', lists.findByIdAndUpdate);
router.delete('/mylists/:id', lists.deleteList);

module.exports = router;
