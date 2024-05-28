import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import styles from "@/styles/contact.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Ragin' Riders",
};

export default function Contact({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	return (
		<main className={styles.main}>
			<Header searchParams={searchParams} />
			<section className={styles.container}>
				<ContactForm />
			</section>
			<Footer />
		</main>
	);
}
