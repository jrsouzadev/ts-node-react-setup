import express from 'express'
import path from 'path'
import http from 'http'
import socketio from 'socket.io'

class Server {
  private readonly _app: express.Application;
  private readonly _server: http.Server;
  private readonly _io: socketio.Server;

  constructor(
    private readonly publicFolder: string,
    private readonly _port = process.env.PORT || 5000
  ) {
    if (!publicFolder) throw new Error('A client public folder must be specified for production')

    this._app = express()
    if (!this._app) throw new Error('App could not initialize. Is express in scope?')

    if (process.env.NODE_ENV === 'production') {
      this._app.use(express.static(this.publicFolder))
    }

    this._server = http.createServer(this._app);
    if (!this._server) throw new Error('Server could not initialize. Is \'http\' in scope?')

    this._io = socketio(this._server)
    if (!this._io) throw new Error('Socket server could not initialize. Is \'socket.io\' in scope?')

    this._io.on('connection', socket => {
      console.log(`New client connected with id ${socket.id}`)
      socket.on('disconnect', () => {
        console.log(`Client of id ${socket.id} has disconnected`)
      })
    })
  }

  listen() {
    this._server.listen(this._port, () => {
      console.log(`Server running on port ${this._port}`)
    })
  }
}

const publicFolder = path.join(__dirname, 'public')

const server = new Server(publicFolder)

server.listen()