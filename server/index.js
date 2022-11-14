const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const config = require('./config');
const router = require('./router');

app.use(bodyParser());
app.use(cors());
app.use(router.routes());

app.listen(config.PORT, () => {
  console.log(`Server kickin it at http://localhost:${config.PORT}`);
})