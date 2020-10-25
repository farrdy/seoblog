const mongoose = require('mongoose')
const crypt = require('crypto')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        unique: true,
        index: true,
        lowercase: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        lowercase: true
    }
    ,
    email: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        unique: true,
        lowercase: true
    },
    profile: {
        type: String,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: Number,
    about: {
        type: String
    }
    , role: {
        type: Number,
        trim: true

    }, photo: {
        data: buffer,
        contentTyepe: String
    },
    resetPassordLink: {
        data: String,
        default: ''

    }

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)