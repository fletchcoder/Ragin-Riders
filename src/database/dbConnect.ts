import mongoose from "mongoose";

export default async function dbConnect() {
	try {
		await mongoose.connect(process.env.MONGODB_URI!);
	} catch (error) {
		throw new Error("Unable to connect to database. Error: " + error);
	}
}
