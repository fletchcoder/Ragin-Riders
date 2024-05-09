import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAppSelector } from "@/redux/store";
import styles from "@/styles/cart.module.css";

export default function Cart({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const cart = useAppSelector((state) => state.cart);

	return (
		<main className={styles.main}>
			<Header searchParams={searchParams} />
			<section>
				{cart.items.map((item) => {
					if (item.color !== "") {
						let colorIndex = item.product.colors?.indexOf(item.color);
						return <div></div>;
					} else {
						return <div></div>;
					}
				})}
			</section>
			<Footer />
		</main>
	);
}
