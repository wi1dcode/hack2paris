const Router = require("express")
const router = new Router()
const controller = require("../controllers/authController")
const { check } = require("express-validator")
const authMiddleware = require("../middlewares/authMiddleware")

// Routes

router.post(
  "/signup",
  [
    check("username", "Username can not be empty").notEmpty(),
    check("password", "Password must be between 4 and 10 symboles")
      .isLength({
        min: 4,
        max: 10,
      })
      .notEmpty(),
    check("mail")
      .notEmpty()
      .trim()
      .normalizeEmail()
      .isEmail()
      .withMessage("Invalid email"),
    check("city", "City can not be empty").notEmpty(),
  ],
  controller.signup
)
router.post("/login", controller.login)
router.get("/users", controller.getUsers)

module.exports = router
