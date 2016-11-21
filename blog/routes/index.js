const router = require('koa-router')();

module.exports = (app)=>{

  router.get('/',(ctx)=>{
   ctx.body = 'welcome homepage'
  });

  router.get('/auth/login',(ctx)=>{
    ctx.body = 'welcome login'
  })

  app
    .use(router.routes())
    .use(router.allowedMethods()); 
}
