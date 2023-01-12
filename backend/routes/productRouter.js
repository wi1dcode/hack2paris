const Router = require("express")
const router = new Router()
const controller = require("../controllers/productController")
const { check } = require("express-validator")

router.post("/product", controller.postProduct)
router.get("/products", controller.getProducts)
router.get("/product/:id", controller.getProductById)

module.exports = router
