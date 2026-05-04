import { user } from '../models/user.model.js';

const registerUser = async (req, res) => {
  try {
    const { username, email, password } 
     //basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user already exists
    const existingUser = await user.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // create user
    const newUser = new user({
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      password: password.trim(),
      loggedIn: false, // In production, hash the password before saving
    });

    res.status(201).json({ 
        message: "User registered successfully",
         user: {id: newUser._id, username: newUser.username, email: newUser.email}});
    }

catch (error) {

    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { registerUser };