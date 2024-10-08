const admin = require("./firebaseAdmin.js");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = verifyToken;
