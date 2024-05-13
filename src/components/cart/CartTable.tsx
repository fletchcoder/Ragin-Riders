"use client";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import styles from "@/styles/components/cart/table.module.css";
import { clearCart, removeFromCart } from "@/redux/cart.slice";

export default function CartTable() {
	const cart = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	function getTotal() {
		let total = 0;
		cart.items.forEach((item) => (total += item.product.price * item.amount));
		return total;
	}

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Product</th>
					<th>Name</th>
					<th className={styles.toggle}>Brand</th>
					<th className={styles.toggle}>Color</th>
					<th>Size</th>
					<th>Amount</th>
					<th>Price</th>
					<th>Total</th>
					<th>-</th>
				</tr>
			</thead>

			{cart.items.length === 0 ? (
				<>
					<tbody>
						<tr>
							<td>N/A</td>
							<td>No Items</td>
							<td className={styles.toggle}>N/A</td>
							<td className={styles.toggle}>N/A</td>
							<td>N/A</td>
							<td>0</td>
							<td>N/A</td>
							<td>N/A</td>
							<td>-</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td></td>
							<td></td>
							<td className={styles.toggle}></td>
							<td className={styles.toggle}></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tfoot>
				</>
			) : (
				<>
					<tbody>
						{cart.items.map((item, index) => {
							if (item.color !== "N/A") {
								let colorIndex = Number(
									item.product.colors?.indexOf(item.color)
								);
								return (
									<tr key={index}>
										<td>
											<Image
												src={item.product.images[colorIndex]}
												width={50}
												height={50}
												alt={`${item.product.name}`}></Image>
										</td>
										<td>{item.product.name}</td>
										<td className={styles.toggle}>{item.product.brand}</td>
										<td className={styles.toggle}>{item.color}</td>
										<td>{item.size}</td>
										<td>{item.amount}</td>
										<td>${Math.round(item.product.price * 100) / 100}</td>
										<td>
											$
											{Math.round(item.product.price * item.amount * 100) / 100}
										</td>
										<td>
											<button onClick={() => dispatch(removeFromCart(item))}>
												Remove
											</button>
										</td>
									</tr>
								);
							} else {
								return (
									<tr key={index}>
										<td>
											<Image
												src={item.product.images[0]}
												width={50}
												height={50}
												alt={`${item.product.name}`}></Image>
										</td>
										<td>{item.product.name}</td>
										<td className={styles.toggle}>{item.product.brand}</td>
										<td className={styles.toggle}>{item.color}</td>
										<td>{item.size}</td>
										<td>{item.amount}</td>
										<td>${Math.round(item.product.price * 100) / 100}</td>
										<td>
											$
											{Math.round(item.product.price * item.amount * 100) / 100}
										</td>
										<td>
											<button onClick={() => dispatch(removeFromCart(item))}>
												Remove
											</button>
										</td>
									</tr>
								);
							}
						})}
					</tbody>
					<tfoot>
						<tr>
							<td></td>
							<td></td>
							<td className={styles.toggle}></td>
							<td className={styles.toggle}></td>
							<td></td>
							<td></td>
							<td>Total</td>
							<td>${Math.round(getTotal() * 100) / 100}</td>
							<td>
								<button onClick={() => dispatch(clearCart())}>Clear</button>
							</td>
						</tr>
					</tfoot>
				</>
			)}
		</table>
	);
}
