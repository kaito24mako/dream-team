//* secure routes for admin-only access
function admin(req, res, next) {
  console.log("admin middleware - user:", req.user);

  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Access denied" });
  }

  next();
}

module.exports = admin;
