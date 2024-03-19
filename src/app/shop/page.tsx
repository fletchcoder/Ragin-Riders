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
					{orderedProducts.map((product) => (
						<Item key={product.id} product={product} />
					))}
				</section>
				<Footer />
			</main>
		</>
	);
}
