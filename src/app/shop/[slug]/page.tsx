import Header from "@/components/Header";
import Footer from "@/components/Footer";
import getProducts from "@/lib/services/productService";
import { notFound } from "next/navigation";
import styles from "@/styles/slug.module.css";

export default async function ItemDetails({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | string | undefined };
}) {
	const products = await getProducts({});
	const featuredProduct = products.find(
		(product) => product.slug === params.slug
	);
	if (!featuredProduct) {
		notFound();
	}

	return (
		<main className={styles.main}>
			<Header searchParams={searchParams} />
			<section className={styles.container}>
				<div className={styles.holder}>
					<div className={styles.left}></div>
					<div className={styles.right}></div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
