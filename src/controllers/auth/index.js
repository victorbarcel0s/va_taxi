const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"];
  console.log(token);
  if (!token)
    return res
      .status(401)
      .json({ auth: false, message: "Nenhum token definido" });
  try {
    const userDecoded = jwt.verify(token, JWT_SECRET);
    req.authUser = userDecoded;
    next();
  } catch (error) {
    return res.status(500).json({
      auth: false,
      message: "falha ao autenticar token",
    });
  }
}
function generateJWT(userData) {
  const token = jwt.sign(userData, JWT_SECRET, {
    expiresIn: 1800, // expira em 15min
  });
  return { auth: true, token: token, expiresIn: "15Min" };
}

module.exports = { verifyJWT, generateJWT };
