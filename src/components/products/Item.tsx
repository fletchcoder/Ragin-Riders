import { Product } from "@/lib/types/Product";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/products/item.module.css";

export default function Item({ product }: { product: Product }) {
	return (
		<div className={styles.card}>
			<Link href={`/shop/${product.slug}`}>
				<Image
					height={250}
					width={250}
					alt={`${product.name} | Ragin' Riders`}
					src={product.images[0]}></Image>
			</Link>
			<div className={styles.info}>
				<Link
					href={`/shop/${product.slug}`}>{`${product.brand} ${product.name}`}</Link>
				<div>
					<span>$</span>
					{product.price}
				</div>
			</div>
		</div>
	);
}
