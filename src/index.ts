import express from 'express'
import path from 'path'
import http from 'http'
import socketio from 'socket.io'

const app = express()

if (process.env.NODE_ENV === 'production') {
  const publicFolder = path.join(__dirname, 'public')
  app.use(express.static(publicFolder))
}

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', socket => {
  console.log(`New client connected with id ${socket.id}`)

  socket.on('disconnect', () => {
    console.log(`Client of id ${socket.id} has disconnected`)
  })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
