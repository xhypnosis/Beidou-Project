require('module-alias/register')

const Koa = require('koa')
const app = new Koa()

const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const static = require('koa-static')
const cors = require('@koa/cors')

const path = require('path')

const index = require('@routes/index')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(cors())

app.use(static(path.join(__dirname, '../dist/')))


// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

// Note: 0.0.0.0 to be given as host in order to be accessed from outside interface
app.listen(8080, '0.0.0.0', () => {
    console.log('Server is starting at port 8080')
})
