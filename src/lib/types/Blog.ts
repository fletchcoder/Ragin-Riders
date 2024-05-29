import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	date: { type: String, required: true },
	image: { type: String, required: true },
	para1: { type: String, required: true },
	para2: { type: String, required: true },
	slug: { type: String, required: true },
});

const BlogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default BlogModel;

export type Blog = {
	_id: string;
	title: string;
	author: string;
	date: string;
	image: string;
	para1: string;
	para2: string;
	slug: string;
};
