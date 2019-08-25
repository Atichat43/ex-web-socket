var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

io.on('connection', socket => {
  console.log('A user connected')
  socket.on('chat message', msg => {
    console.log('message:', JSON.stringify(msg))
    io.emit('chat message', msg)
  })
})

server.listen(3001, () => {
  console.log('lisening on: 3001')
})