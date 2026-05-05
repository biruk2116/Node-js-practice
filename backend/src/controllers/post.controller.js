import { post as Post } from "../models/post.model.js";

// CREATE POST
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

// GET ALL POSTS
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts);

    } catch (error) {
        console.error("🔥 GET POSTS ERROR:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

// UPDATE POST
const updatePost = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "No data provided for update"
            });
        }

        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post updated successfully",
            data: updatedPost
        });

    } catch (error) {
        console.error("🔥 UPDATE POST ERROR:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

//  delete the post 

const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post deleted successfully",
            data: deletedPost
        });

    } catch (error) {
        console.error("🔥 DELETE POST ERROR:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

export { createPost, getPosts, updatePost, deletePost };    