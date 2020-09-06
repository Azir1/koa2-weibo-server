const router = require('koa-router')()
// 前缀
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/profile/:userName', async (ctx, next) => {
  // params动态获取url参数
  const { userName } = ctx.params
  ctx.body = {
    username
  }
})

router.get('/loadMore/:userName/:pageIndex', async (ctx, next) => {
  const { userName, pageIndex } = ctx.params
  ctx.body = {
    userName,
    pageIndex,
    num: 12
  }
})
router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = {
    msg: '登陆哈哈',
    userName,
    password
  }
})
module.exports = router
