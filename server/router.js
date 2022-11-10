const Router = require('koa-router');
const router = new Router();
const profile = require('./controllers/profile');

router.get('/profile', profile.getProfileInfo);
router.post('/profile', profile.insertProfile);

module.exports = router;
