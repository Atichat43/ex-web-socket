var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

io.on('connection', socket => {
  console.log('A user connected')
})

server.listen(3001, () => {
  console.log('lisening on: 3001')
})