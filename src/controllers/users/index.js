const User = require("../../models/user");
const auth = require("../auth");
async function createUser(req, res) {
  try {
    await User.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json({ status: 200, message: "Created Succesfully" });
  } catch (error) {
    console.log(error);
    if (error.original && error.original.errno === 19) {
      res.status(409).json({ status: 409, error: "Username already exists" });
    } else res.status(500).json({ error: error.message, status: 500 });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const dbUser = await User.findByPk(username);
    if (dbUser === null) {
      res.status(401).json({ status: 400, message: "User not found" });
      return;
    }
    console.log(dbUser);
    if (password !== dbUser.password) {
      res.status(401).json({ status: 401, message: "Wrong password" });
      return;
    }
    const jwt = auth.generateJWT(dbUser.dataValues);
    res.status(200).json(jwt);
  } catch (error) {
    res.status(500).json({ error: error.message, status: 500 });
  }
}

module.exports = { createUser, login };
