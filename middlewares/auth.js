const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        // Get token from Authorization header: "Bearer <token>"
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = authHeader.split(" ")[1]; // "Bearer <token>"

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "loginsecret");

        // Attach user info to request
        req.user = decoded;

        next(); // proceed to next middleware / controller
    } catch (err) {
        console.error(err);
        return res.status(401).json({ message: "Invalid token" });
    }
};
