const Product = require('../../models/Product')
const ProductController = {

async createProduct(req,res){

    const bodyData = req.body
    const {user_id} = req.params

    try{
        const data = {username: user_id, ...bodyData}

        const newProduct = await Product.create(data)
        return res.status(200).json(newProduct)

    } catch(err){

        return res.status(400).json(err)
    }
},

async getUserProduct(req,res){


    const {user_id} = req.params
    try{
        const productsOfAnUser = await Product.find({username: user_id})

        
        return res.status(200).json(productsOfAnUser)

    } catch(err){

        return res.status(400).json(err)
    }

    
},
async updateProduct(req,res){


    const bodyData = req.body
    const { product_id, user_id} = req.params

    try{
        const updatedProducts = await Product.findByIdAndUpdate(product_id,bodyData,{new:true})

        
        return res.status(200).json(updatedProducts)

    } catch(err){

        return res.status(400).json(err)
    }

   
},

async deleteProduct(req,res){


    const { product_id, user_id} = req.params

    try{
        const deletedProducts = await Product.findByIdAndDelete(product_id)

        
        return res.status(200).json(deletedProducts)

    } catch(err){

        return res.status(400).json(err)
    }
    
},

async getProducts(req,res){

    try{
        const products = await Product.find()

        
        return res.status(200).json(products)

    } catch(err){

        return res.status(400).json(err)
    }

},

async getProductById(req,res){

    const {product_id} = req.params

    try{
        const products = await Product.findById(product_id)

        
        return res.status(200).json(products)

    } catch(err){
        

        return res.status(400).json(err)
    }

}
}

module.exports=ProductController