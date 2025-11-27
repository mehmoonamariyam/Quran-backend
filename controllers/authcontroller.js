const { User } = require("../models/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
 

    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    username = username.trim();
    email = email.trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Invalid email address" });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ success: false, message: "Email already registered" });
      }
      if (existingUser.username === username) {
        return res.status(400).json({ success: false, message: "Username already taken" });
      }
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const created = await User.create({
      username,
      email,
      password: hashPassword
    });

    const token = jwt.sign(
      { id: created._id, username: created.username },
      process.env.JWT_SECRET || "secretKey",
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      token,
      user: {
        id: created._id,
        username: created.username,
        email: created.email,
        status: created.status
      }
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ success: false, message: "Email or username already registered" });
    }
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const login = async(req, res)=>{
  let {username, password} = req.body
  console.log(req.body);
  try{
  
  const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'User not found' });

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

  
    const token = jwt.sign(
      { id: user._id, username: user.username },
      'loginsecret',
      { expiresIn: '1h' }
    );

  
    res.status(200).json({
      message: 'Login successful',
      token,
      user: { id: user._id, email: user.email, username: user.username },
    });
  }catch(error){
      console.error(err);
    res.status(500).json({ message: 'Server error' });
  }

}


module.exports = { signup, login };
