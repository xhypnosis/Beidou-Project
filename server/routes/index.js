const router = require('koa-router')()
const fs = require("fs")
const path = require('path')

router
    .get('/', async(ctx, next) => {
        // ctx.type = "html"
        // let filePath =  path.join(__dirname, '../../dist/index.html')
        // console.log(filePath)
        // ctx.body = fs.readFileSync(filePath)
        ctx.status = 302
        ctx.redirect('https://edu.tree-graph.org.cn/')
    })

module.exports = router