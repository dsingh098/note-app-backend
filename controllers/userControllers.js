import generateToken from "../config/token.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";


// singup function
export const singup = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;

    if (!name || !username || !password || !email) {
      return res.status(400).json({ message: "send all details" });
    }

    const extisuser = await User.findOne({ email });
    if (extisuser) {
      return res.status(400).send("user already exist");
    }


    const hasspassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      username,
      email,
      password: hasspassword,
    });

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: "User created",
      user: {
        id: user._id,
        name,
        username,
        email,
      },
    });
  } catch (err) {
    res.status(500).send(err);
  }
};



// login function

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let extishuser = await User.findOne({ email });

    if (!extishuser) {
      return res.status(400).json({
        message: "user is not exist",
      });
    }

    let matchpassword = await bcrypt.compare(password, extishuser.password);

    if (!matchpassword) {
      return res.status(400).json({
        message: "paawrod not match",
      });
    }

    let  token = generateToken(extishuser._id);
     

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "User login",
      user: {
        user: extishuser.user,
        name: extishuser.name,
        username: extishuser.username,
        email: extishuser.email,
      },
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};
