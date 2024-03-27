"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/components/search/search.module.css";

export default function Search() {
	return (
		<div className={styles.container}>
			<Image
				className={styles.icon}
				src={"/search.png"}
				height={20}
				width={20}
				alt="Search PNG"></Image>
			<input type="text" placeholder="Search" name="Search" />
		</div>
	);
}
