//* secure routes for admin-only access
function admin(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
}

module.exports = admin;
