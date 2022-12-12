const{Router} = require('express')
const UserController = require('../controllers/UserControler')
const LoginController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')

const { } = require('../middlewares')

const routes = Router()

routes.post('/users', UserController.createUser)

routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)
routes.patch('/users/:user_id',UserController.updatePassowrd)

routes.post('/login', LoginController.createSession)

routes.post('/products/:user_id',ProductController.createProduct)
routes.get('/products/:user_id',ProductController.getUserProduct)
routes.patch('/products/:user_id/:product_id',ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id',ProductController.deleteProduct)
routes.get('/products',ProductController.getProducts)
routes.get('/products/1/:product_id',ProductController.getProductById)

routes.post('/cart/:user_id', CartController.createCart)
routes.get('/cart/:user_id',CartController.getUserCarts)
routes.get('/cart/:user_id/:cart_id',CartController.getCart)

module.exports = routes
