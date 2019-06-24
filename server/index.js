const express = require('express')
const massive = require('massive')
const session = require('express-session')
require('dotenv/config')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const authCtrl = require('./controllers/authController')
const proCtrl = require('./controllers/proController')

const app = express()


app.listen(SERVER_PORT, () => console.log('Welcome to port', SERVER_PORT))

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 7000000000
    }
}))

//auth endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/currentUser', authCtrl.currentUser)

//store endpoints
app.get('/api/products', proCtrl.displayProducts)
app.get('/api/product/:product_id', proCtrl.getProduct)

//store if admin endpoints
app.delete('/api/product/:product_id', proCtrl.delete)
app.put('/api/product/:product_id', proCtrl.edit)




massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
});