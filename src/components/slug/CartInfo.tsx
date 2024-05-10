"use client";

import type { Product } from "@/lib/types/Product";
import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/cart.slice";
import styles from "@/styles/components/slug/cartinfo.module.css";

export default function CartInfo({ item }: { item: string }) {
	const product: Product = JSON.parse(item);
	const dispatch = useAppDispatch();
	const [itemValues, setItemValues] = useState({
		product: product,
		amount: 1,
		color: "N/A",
		size: "N/A",
	});

	function addItems() {
		dispatch(addToCart(itemValues));
	}

	return (
		<div className={styles.container}>
			<select
				name="amount"
				title="Amount"
				onChange={(e) =>
					setItemValues({ ...itemValues, amount: Number(e.target.value) })
				}>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
				<option value={5}>5</option>
				<option value={6}>6</option>
				<option value={7}>7</option>
				<option value={8}>8</option>
				<option value={9}>9</option>
				<option value={10}>10</option>
			</select>
			{product.colors && (
				<select
					name="color"
					title="Color"
					onChange={(e) =>
						setItemValues({ ...itemValues, color: e.target.value })
					}>
					<option></option>
					{product.colors.map((color, index) => (
						<option key={index} value={color}>
							{color}
						</option>
					))}
				</select>
			)}
			{product.sizes && (
				<select
					name="size"
					title="Size"
					onChange={(e) =>
						setItemValues({ ...itemValues, size: e.target.value })
					}>
					<option></option>
					{product.sizes.map((size, index) => (
						<option key={index} value={size}>
							{size}
						</option>
					))}
				</select>
			)}
			<button type="button" onClick={() => addItems()}>
				Add to Cart
			</button>
		</div>
	);
}
