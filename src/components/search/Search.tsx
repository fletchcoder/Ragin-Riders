"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import productService from "@/lib/services/productService";
import Image from "next/image";
import styles from "@/styles/components/search/search.module.css";

export default function Search() {
	const [text, setText] = useState("");
	const data = useQuery({
		queryKey: ["search", text],
		queryFn: () => productService.getByName(text),
	});

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
				name="search"
			/>
		</div>
	);
}
