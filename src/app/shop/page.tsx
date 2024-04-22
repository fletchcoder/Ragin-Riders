import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Item from "@/components/products/Item";
import { Metadata } from "next";
import Link from "next/link";
import productService from "@/lib/services/productService";
import styles from "@/styles/shop.module.css";
import React from "react";

export const metadata: Metadata = {
	title: "Shop Our Products | Ragin' Riders",
	description:
		"The shop page for Ragin' Riders Sacramento, a place for motorcycle accessories.",
};

export default async function Shop({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	let page =
		typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
	let limit =
		typeof searchParams.limit === "string" ? Number(searchParams.limit) : 8;

	const orderedProducts = await productService.getAllProducts({
		page,
		limit,
	});

	return (
		<>
			<main className={styles.main}>
				<Header searchParams={searchParams} />
				<section className={styles.container}>
					<div className={styles.products}>
						{orderedProducts.map((product) => (
							<Item key={product.id} product={product} />
						))}
					</div>
					<div className={styles.buttons}>
						<Link
							href={{
								pathname: "/shop",
								query: {
									page: page > 1 ? page - 1 : 1,
								},
							}}>
							<button className={page > 1 ? styles.active : styles.inactive}>
								&#60;
							</button>
						</Link>
						<Link
							href={{
								pathname: "/shop",
								query: {
									page: page < 4 ? page + 1 : 4,
								},
							}}>
							<button className={page < 4 ? styles.active : styles.inactive}>
								&#62;
							</button>
						</Link>
					</div>
				</section>
				<Footer />
			</main>
		</>
	);
}
