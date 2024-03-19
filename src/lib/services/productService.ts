import { cache } from "react";
import dbConnect from "@/database/dbConnect";
import productModel, { Product } from "../types/Product";

export const revalidate = 3600;

const getInOrder = cache(async () => {
	await dbConnect();
	const products = await productModel.find({}).sort({ id: 1 }).lean();

	return products as unknown as Product[];
});

const productService = {
	getInOrder,
};

export default productService;
