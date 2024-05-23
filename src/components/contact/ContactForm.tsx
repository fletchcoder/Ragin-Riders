import styles from "@/styles/components/contact/contactform.module.css";

export default function ContactForm() {
	return (
		<form
			className={styles.form}
			method="post"
			action="https://formsubmit.co/03f61d3e2ca30c7b986ea9acfa2e04b5">
			<h2>Send Us An E-mail</h2>
			<label htmlFor="fullname">Your Full Name</label>
			<input
				type="text"
				name="fullname"
				id="fullname"
				placeholder="Your Name"
			/>
			<label htmlFor="email">Your Email</label>
			<input type="email" name="email" id="email" placeholder="Your Email" />
			<label htmlFor="message">Your Message</label>
			<textarea
				name="message"
				id="message"
				rows={6}
				cols={30}
				placeholder="Your Message..."></textarea>
			<button type="submit">Send E-mail</button>
		</form>
	);
}
