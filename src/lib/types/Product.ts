import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		id: { type: Number, required: true, unique: true },
		name: { type: String, required: true },
		image: { type: String, required: true },
		price: { type: Number, required: true },
		description: { type: String, required: true },
		category: { type: String, required: true },
		colors: Array,
		sizes: Array,
	},
	{
		timestamps: true,
	}
);

export type Product = {
	id: number;
	name: string;
	image: string;
	price: number;
	description: string;
	category: string;
	colors?: [];
	sizes?: [];
};
