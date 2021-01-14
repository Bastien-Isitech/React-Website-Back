var express = require('express')
const userMode1 = require('../models/user')
var User = require('../models/user')

var router = express.Router()

router.get('/', async(req,res) => {
    let users = await User.find({})
    res.json(users)
})

router.get('/:title', async(req,res) => {
    let user = await User.findOne({title: req.params.title})
    res.json(user) 
})

router.delete('/:title', async(req,res) => {
    let user = await User.findOneAndDelete({title: req.params.title})
    res.json(user) 
})

router.post('/', (req,res) => {
    let user = new User(req.body)
    user.save()
    res.json(user)
})

module.exports = router