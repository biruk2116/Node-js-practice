import { post as Post } from "../models/post.model.js";

// create a post 
const createPost = async (req, res) => {
    try {
        const { name, description, age } = req.body;

        if (!name || !description || !age) {
            return res.status(400).json({ 
                message: "All fields are required" 
            });
        }

        const newPost = await Post.create({
            name,
            description,
            age
        });

        res.status(201).json({
            message: "Post created successfully",
            data: newPost
        });

    } catch (error) {
        console.error("🔥 CREATE POST ERROR:", error);

        res.status(500).json({ 
            message: "Server error",
            error: error.message 
        });
    }
};

// read all post

const getPosts = async (req, res) => {
    try {
        const getPosts = await Post.find();
        res.status(200).json(getPosts);
    } catch (error) {
        console.error("🔥 GET POSTS ERROR:", error);
        res.status(500).json({ 
            message: "Server error",
            error: error.message 
        });
    }
};

export { createPost, getPosts };