import { post } from "../models/post.model.js";

// create a post 

const createPost = async (req, res) => {
    try {
        const { name, description, age } =re.body;
            if(!name || !description || !age){
                return res.status(400).json({ message: "All fields are required" });
            }
            
    }
    catch (error) {
       
    }
}