module.exports={
    add: (req, res) => {
        try{
        
       
        req.session.cart.push(req.body)
        res.send(req.session.cart)
        
    } catch (error){ 
        console.log('error adding to cart', error)
        res.status(500).send(error)
    }
    },

    getCart: (req, res) => {
        res.send(req.session.cart)
    },

    delete: (req, res) => {
        let index = req.params
        req.session.cart.splice(index, 1)
        res.send(req.session.cart)
        
    }
    
}
