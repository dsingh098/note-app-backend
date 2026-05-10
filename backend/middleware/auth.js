import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {

    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Please login first",
      });
    }
  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    next();
  } catch (error) {
    console.log("Auth error:", error.message);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default auth;