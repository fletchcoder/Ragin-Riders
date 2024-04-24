import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSet from "@/components/slug/ImageSet";
import productService from "@/lib/services/productService";
import { notFound } from "next/navigation";
import styles from "@/styles/slug.module.css";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const products = await productService.getAllProducts({});
	const item = products.find((product) => product.slug === params.slug);
	if (!item) {
		return {
			title: "Product not found",
		};
	}

	return {
		title: `${item.name} by ${item.brand} | Ragin' Riders`,
		description: `${item.description} - Ragin' Riders`,
	};
}

export default async function ItemDetails({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const item = await productService.getBySlug(params.slug);

	if (!item) {
		notFound();
	}

	return (
		<main className={styles.main}>
			<Header searchParams={searchParams} />
			<section className={styles.container}>
				<div className={styles.holder}>
					<div className={styles.left}>
						<ImageSet product={item} />
					</div>
					<div className={styles.right}>
						<h1>{item.name}</h1>
						<h2>by {item.brand}</h2>
						<p>{item.description}</p>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
