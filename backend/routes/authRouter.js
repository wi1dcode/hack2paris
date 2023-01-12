const Router = require("express");
const router = new Router();
const authController = require("../controllers/authController");
const { check } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");

// Routes

router.post(
  "/register",
  [
    check("username", "Username can not be empty").notEmpty(),
    check("password", "Password must be between 4 and 10 symboles")
      .isLength({
        min: 4,
        max: 15,
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
  authController.signup
);
router.post("/login", authController.login);
router.get("/users", authController.getUsers);

module.exports = router;
