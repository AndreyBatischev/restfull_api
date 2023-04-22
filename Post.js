import mongoose from "mongoose";

const Post = new mongoose.Schema({
    autor: { type: String, requeired: true },
    title: { type: String, requeired: true },
    content: { type: String, requeired: true },
    picture: { type: String, requeired: false }
})

export default mongoose.model('Post', Post)