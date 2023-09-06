import express from 'express'
import ViteExpress from 'vite-express'

const app = express()

// Serving the Pages folder as static files
app.use('/', express.static('src/client/pages'))

// API Route
app.get('/api', (_, res) => {
  res.json({
    msg: 'Hello World',
  })
})

// Listening to the port 3000
ViteExpress.listen(app, 3000, () =>
  console.log('Server started at: http://localhost:3000/')
)
