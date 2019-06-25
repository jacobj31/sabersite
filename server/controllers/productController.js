module.exports={
    displayProducts: async (req, res) => {
        try{
            let db = req.app.get('db')
            let products = await db.get_products()
            res.send(products)
        } catch (error){
            console.log('error fetching products:', error)
            res.status(500).send(error)
        }
    },
    getProduct: async (req, res) => {
        try{
            let db = req.app.get('db')
            let {product_id} = req.params
            let products = await db.get_product(product_id)
            let product = products[0]
            res.send(product)
        }catch (error){
            console.log('error fetching product:', error)
            res.status(500).send(error)
        }
    },
    delete: async (req, res) => {
        try{
            let db = req.app.get('db')
            let {product_id} = req.params
            let products = await db.delete_product(product_id)
            res.send(products)
        } catch (error) {
            console.log('error deleting product', error)
            res.status(500).send(error)
        }
    },
    edit: async (req, res) => {
        try{
            let db = req.app.get('db')
            let {product_id} = req.params
            let {name, category, price, image, description} = req.body
            products = await db.edit_product([product_id, name, category, price, image, description])
            res.send(products)
        }catch (error) {
            console.log('error updating product', error)
            res.status(500).send(error)
        }
    }
}