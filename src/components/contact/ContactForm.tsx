"use client";

import { FormEvent, useState } from "react";
import styles from "@/styles/components/contact/contactform.module.css";

export default function ContactForm() {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState([]);
	const [success, setSuccess] = useState(false);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		const res = await fetch("api/contact", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ fullname, email, message }),
		});

		const { msg, success } = await res.json();
		setError(msg);
		setSuccess(success);

		if (success) {
			setFullname("");
			setEmail("");
			setMessage("");
		}
	}

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h2>Send Us An E-mail</h2>
				<label htmlFor="fullname">Your Full Name</label>
				<input
					type="text"
					name="fullname"
					id="fullname"
					value={fullname}
					onChange={(e) => setFullname(e.target.value)}
					placeholder="Your Name"
				/>
				<label htmlFor="email">Your Email</label>
				<input
					type="email"
					name="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Your Email"
				/>
				<label htmlFor="message">Your Message</label>
				<textarea
					name="message"
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					rows={6}
					cols={30}
					placeholder="Your Message..."></textarea>
				<button type="submit">Send E-mail</button>
			</form>
			{error && (
				<div className={success ? styles.success : styles.fail}>
					{error.map((e, index) => (
						<p key={index}>{e}</p>
					))}
				</div>
			)}
		</>
	);
}
