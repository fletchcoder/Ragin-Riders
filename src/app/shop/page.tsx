import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Item from "@/components/products/Item";
import { Metadata } from "next";
import productService from "@/lib/services/productService";
import styles from "@/styles/shop.module.css";

export const metadata: Metadata = {
	title: "Shop Our Products | Ragin' Riders",
	description:
		"The shop page for Ragin' Riders Sacramento, a place for motorcycle accessories.",
};

export default async function Shop() {
	const orderedProducts = await productService.getInOrder();

	return (
		<>
			<main className={styles.main}>
				<Header />
				<section className={styles.container}>
					<div className={styles.left}>
						<div className={styles.category}>
							BRAND
							<span className={styles.arrow}>&#10151;</span>
						</div>
						<div className={styles.category}>
							CATEGORY
							<span className={styles.arrow}>&#10151;</span>
						</div>
						<div className={styles.category}>
							PRICE
							<span className={styles.arrow}>&#10151;</span>
						</div>
					</div>
					<div className={styles.right}>
						{orderedProducts.map((product) => (
							<Item key={product.id} product={product} />
						))}
					</div>
				</section>
				<Footer />
			</main>
		</>
	);
}
