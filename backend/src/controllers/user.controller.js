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
}
    catch (error) {