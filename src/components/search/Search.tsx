"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { Product } from "@/lib/types/Product";
import productService from "@/lib/services/productService";
import Image from "next/image";
import SearchResults from "./SearchResults";
import styles from "@/styles/components/search/search.module.css";

export default function Search() {
	const [text, setText] = useState("");
	const [query] = useDebounce(text, 800);

	const { data, isLoading } = useQuery({
		queryKey: ["search", query],
		queryFn: () => {
			if (query) {
				return productService.getByName(query);
			}
			return [];
		},
	});

	return (
		<div>
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
			{/* <SearchResults data={data} isLoading={isLoading} /> */}
		</div>
	);
}
