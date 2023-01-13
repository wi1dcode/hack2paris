const Router = require("express")
const router = new Router()
const controller = require("../controllers/productController")
const { check } = require("express-validator")
const authMiddleware = require("../middlewares/authMiddleware")

router.get("/", controller.getProducts)
router.get("/:id", controller.getProductById)
router.use(authMiddleware)
router.post("/", controller.postProduct)
router.post("/:id/rents", controller.rentProduct)

module.exports = router
