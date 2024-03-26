import { cache } from "react";
import dbConnect from "@/database/dbConnect";
import productModel, { Product } from "../types/Product";

export const revalidate = 3600;

const getProducts = cache(
	async ({ page = 1, limit = 8 }: { page?: number; limit?: number }) => {
		await dbConnect();

		const skip = (page - 1) * limit;

		const products = await productModel
			.find({})
			.sort({ id: 1 })
			.limit(limit)
			.skip(skip)
			.lean();

		return products as unknown as Product[];
	}
);

export default getProducts;
