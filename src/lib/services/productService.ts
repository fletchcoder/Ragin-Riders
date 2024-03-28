import { cache } from "react";
import dbConnect from "@/database/dbConnect";
import productModel, { Product } from "../types/Product";
import { PipelineStage } from "mongoose";

export const revalidate = 3600;

const getProducts = cache(
	async ({
		page = 1,
		limit = 8,
		query,
	}: {
		page: number;
		limit: number;
		query?: string;
	}) => {
		await dbConnect();

		const skip = (page - 1) * limit;

		const pipeline: PipelineStage[] = [{ $skip: skip }, { $limit: limit }];

		if (query) {
			pipeline.unshift({
				$search: {
					index: "search",
					text: {
						query,
						fuzzy: {
							maxEdits: 2,
							prefixLength: 3,
						},
						path: ["category", "brand", "name"],
					},
				},
			});
		}

		const products = await productModel.aggregate(pipeline);
		return products as unknown as Product[];
	}
);

export default getProducts;
