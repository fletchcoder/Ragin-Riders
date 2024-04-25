"use client";

import { Product } from "@/lib/types/Product";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/slug/images.module.css";

export default function ImageSet({ item }: { item: string }) {
	const product: Product = JSON.parse(item);
	const [bigImage, setBigImage] = useState(product.images[0]);

	return (
		<div className={styles.container}>
			<div className={styles.images}>
				{product.images.map((image, index) => (
					<Image
						src={image}
						height={80}
						width={80}
						alt=""
						key={index}
						onClick={() => setBigImage(image)}></Image>
				))}
			</div>
			<div className={styles.big}>
				<Image src={bigImage} height={400} width={400} alt=""></Image>
			</div>
		</div>
	);
}
