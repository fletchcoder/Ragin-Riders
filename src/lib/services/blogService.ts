import { cache } from "react";
import dbConnect from "@/database/dbConnect";
import BlogModel, { Blog } from "../types/Blog";

const getAllBlogs = cache(async () => {
	await dbConnect();
	const blogs = await BlogModel.find({}).lean();
	return blogs as unknown as Blog[];
});

const getPostBySlug = cache(async (slug: string) => {
	await dbConnect();
	const post = await BlogModel.findOne({ slug }).lean();
	return post as Blog;
});

const blogService = {
	getAllBlogs,
	getPostBySlug,
};

export default blogService;
