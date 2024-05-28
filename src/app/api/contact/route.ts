import { NextResponse } from "next/server";
import dbConnect from "@/database/dbConnect";
import ContactModel from "@/lib/types/Contact";
import mongoose from "mongoose";

export async function POST(req: any) {
	const { fullname, email, message } = await req.json();

	try {
		await dbConnect();
		await ContactModel.create({ fullname, email, message });
		return NextResponse.json({
			msg: ["Message sent successfully!"],
			success: true,
		});
	} catch (error) {
		if (error instanceof mongoose.Error.ValidationError) {
			let errorList = [];
			for (let e in error.errors) {
				errorList.push(error.errors[e].message);
			}
			return NextResponse.json({ msg: errorList });
		} else {
			return NextResponse.json({ msg: "Failed to send message" });
		}
	}
}
