var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(express.static('./'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var BookClubUser = require('./db').BookClubUser

var user = {}

app.get('/dashboard', function(req, res) {
  res.sendFile('./dashboard.html', {root: './'})
})

app.post('/login-user', function(req, res, next){
    console.log(req.body)
    //our mongoose schema should handle converting the age string to a number
    BookClubUser.findOne({username: req.body.username}, function(err, data){
        if (err){ next(err) }
        else if (data) {
            user = data
            console.log('this user signed in: ', data)
            console.log('user: ', user)
            // res.status(200).send(data)
            res.send(data)
        } else {
            res.send({failure:'Failed to login'})
        }
    })

})


var server = app.listen(80)

var io = require('socket.io')

// we take our http server, pass it into socket.io, and that creates our socket server
var socketServer = io(server)


// the 'socketServer' variable represents the connectinon between my server and all of my websocket clients
// calling 'io()' on the client fires the 'connection' event here.
socketServer.on('connection', function(socket){
    // the 'socket' variable represents the connection between my server and one particular client

    console.log('someone connected!')
    // console.log('socket? ', socket)
    // 'emit' lets us create a custom event that the clients can listen to

    /*socketServer.emit('message', {
        // the clients don't know if other clients received this message too.
        message: "A new user connected!"
    })*/



    // there is no function in socket.io to create rooms
    // if you join a room that does not exist, it will be created
    // when all users have left a room, it is automatically deleted

    socket.on('allchat', function(data){
        console.log(data)
        socket.emit('message', {

            message: data.message
        })
    })



    socket.on('disconnect', function(data){
        console.log('a client disconnected')
    })

})
