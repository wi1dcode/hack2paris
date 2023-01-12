const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "You need to login first" });
      return res.status(403).json({ message: "You need to login first" });
    }
    const decodedData = jwt.verify(token, process.env.SECRET);
    console.log(decodedData)
    req.user = decodedData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: "You need to login first" });
    console.log(e);
    return res.status(403).json({ message: "You need to login first" });
  }
};
};
