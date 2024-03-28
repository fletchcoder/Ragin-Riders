"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import Image from "next/image";
import styles from "@/styles/components/search/search.module.css";

export default function Search() {
	const router = useRouter();
	const [text, setText] = useState("");
	const [query] = useDebounce(text, 500);

	useEffect(() => {
		if (!query) {
			router.push(`/shop`);
		} else {
			router.push(`/shop?search=${query}`);
		}
	}, [query]);
	return (
		<div className={styles.container}>
			<Image
				className={styles.icon}
				src={"/search.png"}
				height={20}
				width={20}
				alt="Search PNG"></Image>

			<input
				value={text}
				onChange={(e) => setText(e.target.value)}
				type="text"
				placeholder="Search"
				name="Search"
			/>
		</div>
	);
}
