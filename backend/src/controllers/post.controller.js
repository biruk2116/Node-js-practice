import { post as Post } from "../models/post.model.js";

// create a post 

const createPost = async (req, res) => {
    try {
        const { name, description, age } =req.body;
            if(!name || !description || !age){
                return res.status(400).json({ message: "All fields are required" });
            }
        const newPost = await post.create({
            name,
            description,
            age
        });
       res.status(201).json({
    message: "Post created successfully",
    data: newPost
});
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
       
    }
}


export { createPost };