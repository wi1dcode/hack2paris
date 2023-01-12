const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")
require("dotenv").config()

const generateAccessToken = (id) => {
  const payload = {
    id,
  }
  return jwt.sign(payload, process.env.SECRET, { expiresIn: "24h" })
}

class authController {
  async signup(req, res) {
    try {
      // express-validation
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Error in signup", errors })
      }
      // destruct
      const { username, password, mail, city } = req.body
      // find user in db, if not continue
      const usernameExist = await User.findOne({ username })
      const emailExist = await User.findOne({ mail })
      if (usernameExist || emailExist) {
        return res.status(400).json({ message: "Already registered" })
      }
      // hash password
      const hashPassword = bcrypt.hashSync(password, 7)
      // find user role
      // create user with hash password and user role
      const user = new User({
        username,
        password: hashPassword,
        mail,
        city,
      })
      // save data to db
      await user.save()
      // send message
      return res.json({ message: "Registered" })
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: "Registration error" })
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username })
      if (!user) {
        return res.status(400).json({ message: `User ${username} not found!` })
      }
      const validPassword = bcrypt.compareSync(password, user.password)
      if (!validPassword) {
        return res.status(400).json({ message: `Wrong password!` })
      }
      const token = generateAccessToken(user._id)
      return res.json({ token })
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: "Login error" })
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.find()
      res.json(users)
    } catch (e) {
      res.status(400).json({ message: "Error get users" })
    }
  }
}

module.exports = new authController()
