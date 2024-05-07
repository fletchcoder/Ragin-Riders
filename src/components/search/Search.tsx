"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import Image from "next/image";
import styles from "@/styles/components/search/search.module.css";

export default function Search({ search = "" }: { search?: string }) {
	const [text, setText] = useState(search);
	const [query] = useDebounce(text, 600);
	const router = useRouter();

	useEffect(() => {
		if (query) {
			router.push(`/search?query=${query}`);
		}
	}, [query]);

	return (
		<div>
			<div className={styles.container}>
				<Image
					className={styles.icon}
					src={"/search.png"}
					height={20}
					width={20}
					alt=""></Image>

				<input
					value={text}
					onChange={(e) => setText(e.target.value)}
					type="text"
					placeholder="Search"
					name="search"
				/>
			</div>
		</div>
	);
}
