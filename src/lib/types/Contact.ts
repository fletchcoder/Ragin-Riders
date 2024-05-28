import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
	fullname: {
		type: String,
		required: [true, "Name must be provided"],
		minLength: [3, "Name must be at least 3 characters"],
		maxLength: [40, "Name must be less than 40 characters"],
	},
	email: {
		type: String,
		required: [true, "Email must be provided"],
		match: [
			/^(?:[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
			"Invalid email address",
		],
	},
	message: { type: String, required: [true, "Message must be provided"] },
	date: { type: Date, default: Date.now() },
});

const ContactModel =
	mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default ContactModel;
