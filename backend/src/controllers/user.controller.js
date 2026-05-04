import User from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      password: password.trim(),
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
    try {

        // checking if the user is alreday exists

        const { email, password } = req.body;

        const user = await User.findOne({ email:email.toLowerCase().trim() });

        if (!user) {return res.status(404).json({ message: "User not found" });}

        // checking if the password is correct


    }
    catch (error) {}
}

export { registerUser };