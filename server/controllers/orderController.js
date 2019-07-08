module.exports = {
    display: async (req, res) => {
        try{
            let db = req.app.get('db')
            let orders = await db.display_orders(req.session.user.user_id)
            res.send(orders)
        } catch (error){
            console.log('error fetching orders:', error)
            res.status(500).send(error)
        }
},
    allOrders: async (req, res) => {
        try{
            let db = req.app.get('db')
            let orders = await db.display_all_orders()
            res.send(orders)
        } catch (error){
            console.log('error fetching orders:', error)
            res.status(500).send(error)
        }
    }

}