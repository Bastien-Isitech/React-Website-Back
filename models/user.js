var mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema ({
    title :{
        type: String,
        required: true
    },
    contenu :{
        type: String,
        required: true
    },
    pays :{
        type: String,
        required: true
    },
})

var userMode1 = mongoose.model('user', UserSchema)
module.exports = userMode1