const stripe = require('stripe')(process.env.STRIPE_SECRET)

module.exports = {
    pay: (req, res) => {
        const {token:{id}, amount} = req.body
        console.log(id, amount, stripe)
        console.log(req.session)
        stripe.charges.create(
            {
                amount: amount,
                currency:'usd',
                source: id,
                description: 'Test Charge'
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log('success!', charge)
                    req.session.cart = []
                    console.log(req.session)
                    return res.status(200).send(charge)
                }
            }
        )
    }
}