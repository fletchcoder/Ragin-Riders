"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import Image from "next/image";
import styles from "@/styles/components/search/search.module.css";

export default function Search({ search }: { search?: string }) {
	const router = useRouter();
	const [text, setText] = useState(search);
	const [query] = useDebounce(text, 800);

	function handleSubmit() {
		useEffect(() => {
			if (!text) {
				router.replace(`/shop`);
			} else {
				router.replace(`/shop?search=${query}`);
			}
		}, [query, router]);
	}

	return (
		<div className={styles.container}>
			<Image
				className={styles.icon}
				src={"/search.png"}
				height={20}
				width={20}
				alt="Search PNG"></Image>

			<form
				onSubmit={() => {
					handleSubmit();
				}}>
				<input
					value={text}
					onChange={(e) => setText(e.target.value)}
					type="text"
					placeholder="Search"
					name="search"
				/>
			</form>
		</div>
	);
}
