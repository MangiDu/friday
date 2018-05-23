const path = require('path')
const Koa = require('koa')
const KoaStatic = require('koa-static')
const KoaRouter = require('koa-router')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const router = new KoaRouter()

router.get('/api/test', (ctx, next) => {
    ctx.body = {name: 123}
    next()
})

app.use(bodyparser())
app.use(router.routes()).use(router.allowedMethods())
app.use(KoaStatic(path.join(__dirname, '../static')))

app.listen(3000)