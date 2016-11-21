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

//����ģ������Ϊejs
ejs(app,{
  root: path.join(__dirname,'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
});

//���þ�̬�ļ�Ŀ¼
app.use(require('koa-static')(__dirname + '/public'));
//session �м��
//app.use(session({
//  name:config.session.key,//����cookie�б���session id���ֶ�����
//  secret:config.session.secret,//����secret������hashֵ������config�У�ʹ������signedCookie ���۸�
//  cookie:{
//    maxAge: config.session.maxAge//����ʱ�䣬���ں�cookie�е�session id�Զ�ɾ��
//  },
//  store: new MongoStore({//��session�洢��mongodb
//    url: config.mongodb//mongodb��ַ
//  })
//}));

//flash�м����������ʾ֪ͨ
//app.use(flash());

//��������ļ��ϴ����м��
app.use(koaBody({formidable:{uploadDir:__dirname}}));

//��־
app.use(logger())

//·��
routes(app);

app.listen(config.port, ()=>{
  console.log(`${pkg.name} listening on port ${config.port}`);
});
