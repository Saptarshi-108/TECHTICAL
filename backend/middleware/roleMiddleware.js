const Role = require("../models/Role");

const authorizeRoles = (...allowedRoles) => {
  return async (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({ message: "Access denied" });
    }

    const userRole = await Role.findById(req.user.role);
    if (!userRole || !allowedRoles.includes(userRole.roleName)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }

    next();
  };
};

module.exports = { authorizeRoles };
