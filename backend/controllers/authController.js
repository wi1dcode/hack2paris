const User = require("./models/User")
const Role = require("./models/Role")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")
const { secret } = require("./config")

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  }
  return jwt.sign(payload, secret, { expiresIn: "24h" })
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
      const { username, password } = req.body
      // find user in db, if not continue
      const candidate = await User.findOne({ username })
      if (candidate) {
        return res.status(400).json({ message: "Already registered" })
      }
      // hash password
      const hashPassword = bcrypt.hashSync(password, 7)
      // find user role
      const userRole = await Role.findOne({ value: "User" })
      // create user with hash password and user role
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
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
      const token = generateAccessToken(user._id, user.roles)
      return res.json({ token })
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: "Login error" })
    }
  }
  async getUsers(req, res) {
    try {
      // --- FOR CREATE MODEL IN DATABASE ---
      // const userRole = new Role()
      // const adminRole = new Role({ value: "Admin" })
      // await userRole.save()
      // await adminRole.save()

      const users = await User.find()
      res.json(users)
      res.json("getusers: server work")
    } catch (e) {}
  }
}

module.exports = new authController()
