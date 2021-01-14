var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
const router = require('./routers/users')
var routerUsers = require('./routers/users')

mongoose.Promise = Promise
mongoose.connect('mongodb+srv://root:root@cluster0.kihy4.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
    console.log('db connected')
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
})

app.get('/', (req,res) => {
    res.json({status:'Ok'})
})

app.use('/users',routerUsers)

app.listen(3001)