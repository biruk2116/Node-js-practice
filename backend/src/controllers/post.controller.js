import { post } from "../models/post.model.js";

// create a post 

const createPost = async (req, res) => {
    try {
        const { name, description, age } =re.body;
            if(!name || !description || !age){
                return res.status(400).json({ message: "All fields are required" });
            }
        const post = await post.create({
            name,
            description,
            age
        });
        res.status(201).json({
            message: "Post created successfully",
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
       
    }
}

export { 
    createPost };