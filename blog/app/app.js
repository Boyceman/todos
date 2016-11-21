import path from 'path';
import Koa from'koa';
import session from 'koa-session';
//const MongoStore = require('connect-mongo')(session);
import flash from 'connect-flash';
import config from 'config-lite';
import routes from '../routes';
import pkg from '../package';
import logger from 'koa-logger';
import koaBody from 'koa-body';
import ejs from 'koa-ejs';
const app = new Koa();

//设置模板引擎为ejs
ejs(app,{
  root: path.join(__dirname,'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
});

//设置静态文件目录
app.use(require('koa-static')(__dirname + '/public'));
//session 中间件
//app.use(session({
//  name:config.session.key,//设置cookie中保存session id的字段名称
//  secret:config.session.secret,//设置secret来计算hash值并放在config中，使产生的signedCookie 防篡改
//  cookie:{
//    maxAge: config.session.maxAge//过期时间，过期后cookie中的session id自动删除
//  },
//  store: new MongoStore({//将session存储到mongodb
//    url: config.mongodb//mongodb地址
//  })
//}));

//flash中间件，用来显示通知
//app.use(flash());

//处理表单及文件上传的中间件
app.use(koaBody({formidable:{uploadDir:__dirname}}));

//日志
app.use(logger())

//路由
routes(app);

app.listen(config.port, ()=>{
  console.log(`${pkg.name} listening on port ${config.port}`);
});
