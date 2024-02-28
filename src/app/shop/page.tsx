import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/shop.module.css";

export default function Shop() {
	return (
		<>
			<main className={styles.main}>
				<Header />
				<section className={styles.container}></section>
				<Footer />
			</main>
		</>
	);
}
