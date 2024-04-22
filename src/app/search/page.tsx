import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Result from "@/components/search/Result";
import productService from "@/lib/services/productService";
import styles from "@/styles/searchpage.module.css";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const page = 1;
	const limit = 25;
	const query =
		typeof searchParams.query === "string" ? searchParams.query : undefined;

	const searchResults = await productService.getAllProducts({
		page,
		limit,
		query,
	});

	return (
		<main className={styles.main}>
			<Header searchParams={searchParams} />
			<section className={styles.container}>
				{searchResults.map((result) => (
					<Result result={result} key={result.id} />
				))}
			</section>
			<Footer />
		</main>
	);
}
