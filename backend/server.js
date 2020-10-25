const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')

const BlogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())


app.use(BlogRoutes);
app.use(authRoutes);
//CORS
if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port} `)
})

mongoose.connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log('DB CONNECTED'))