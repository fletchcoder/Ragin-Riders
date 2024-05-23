"use client";

import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import styles from "@/styles/components/account/accountinfo.module.css";

export default function AccountInfo() {
	const auth = useAppSelector((state) => state.auth);

	return (
		<div className={styles.info}>
			<h2>Profile Pic:</h2>
			<Image
				src={auth.currentUser.image}
				height={200}
				width={200}
				alt="Profile Picture"></Image>
			<h2>Username:</h2>
			<p>{auth.currentUser.username}</p>
			<h2>Email:</h2>
			<p>{auth.currentUser.email}</p>
			<h2>Bio:</h2>
			<p>No bio set</p>
		</div>
	);
}
