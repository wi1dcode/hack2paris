const Router = require("express")
const router = new Router()
const controller = require("./authController")
const { check } = require("express-validator")
const authMiddleware = require("./middlewares/authMiddleware")
const roleMiddleware = require("./middlewares/roleMiddleware")

// Routes

router.post(
  "/signup",
  [
    check("username", "Username can not be empty").notEmpty(),
    check("password", "Password must be between 4 and 10 symboles").isLength({
      min: 4,
      max: 10,
    }),
  ],
  controller.signup
)
router.post("/login", controller.login)
router.get("/users", roleMiddleware(["Admin"]), controller.getUsers)

module.exports = router