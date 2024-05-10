import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartTable from "@/components/cart/CartTable";
import styles from "@/styles/cart.module.css";

export default function Cart({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	return (
		<main className={styles.main}>
			<Header searchParams={searchParams} />
			<section className={styles.container}>
				<CartTable />
			</section>
			<Footer />
		</main>
	);
}
