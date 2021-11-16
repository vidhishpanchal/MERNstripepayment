require('dotenv').config()
const cors = require('cors')
const express = require('express')
// TODO: Add stripe key
const stripe = require('stripe')(process.env.SECRET_KEY)
const uuid = require('uuid')
// const { "v4": uuidv4 } = require('uuid');
const app = express()
const PORT = 5000
//middlewares
app.use(express.json())
app.use(cors())
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.post("/payment", (req, res) => {
    const { product, token } = req.body
    console.log('PRODUCT : ', product);
    console.log('PRICE : ', product.price);
    //so that the user is not charged twice
    const idempotencyKey = uuid
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then((customer) => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            reciept_email: token.email,
            description: `your purchased ${product.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, { idempotencyKey })
    })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch(err => { console.log(err); })
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT} `);
})