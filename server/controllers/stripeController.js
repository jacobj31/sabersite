const stripe = require('stripe')(process.env.STRIPE_SECRET)

module.exports = {
    pay: (req, res) => {
        let db = req.app.get('db')
        const {token:{id}, amount} = req.body
        const {user_id} = req.session.user
        // console.log(id, amount, stripe)
        // console.log(req.session)
        stripe.charges.create(
    
            {
                amount: amount,
                currency:'usd',
                source: id,
                description: 'Test Charge'
            },
            async (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
               //     console.log('success!', charge)
                    const {line1, city, state, postal_code, country} = charge.billing_details.address
                    let max = await db.create_order(user_id, (amount/100).toFixed(2), line1, city, state, postal_code, country)
                    
                    console.log(max)
                    req.session.cart.map((item) => {
                        db.create_order_product(max[0].max, item.product_id)
                    })


                    console.log('success!', req.session)
                    req.session.cart = []
                    return res.status(200).send(charge)
                }
            }
        )
    }
}