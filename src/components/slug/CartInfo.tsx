"use client";

import type { Product } from "@/lib/types/Product";
import styles from "@/styles/components/slug/cartinfo.module.css";

export default function CartInfo({ item }: { item: string }) {
	const product: Product = JSON.parse(item);

	return (
		<div className={styles.container}>
			<select name="amount" id="amount">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</select>
			{product.colors && (
				<select name="color">
					{product.colors.map((color, index) => (
						<option key={index} value={color}>
							{color}
						</option>
					))}
				</select>
			)}
			{product.sizes && (
				<select name="size">
					{product.sizes.map((size, index) => (
						<option key={index} value={size}>
							{size}
						</option>
					))}
				</select>
			)}
			<button type="button">Add to Cart</button>
		</div>
	);
}
