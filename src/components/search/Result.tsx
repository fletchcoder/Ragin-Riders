import { Product } from "@/lib/types/Product";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/search/result.module.css";

export default function Result({ result }: { result: Product }) {
	return (
		<div className={styles.result}>
			<div className={styles.image}>
				<Image src={result.images[0]} height={100} width={100} alt=""></Image>
			</div>
			<div className={styles.info}>
				<Link href={`/shop/${result.slug}`}>
					<p>{result.name}</p>
				</Link>
				<p>by {result.brand}</p>
				<p className={styles.price}>$ {result.price}</p>
			</div>
		</div>
	);
}
