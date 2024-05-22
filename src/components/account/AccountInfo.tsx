"use client";

import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import styles from "@/styles/components/account/accountinfo.module.css";

export default function AccountInfo() {
	const auth = useAppSelector((state) => state.auth);

	return (
		<div className={styles.info}>
			<Image
				src={auth.currentUser.image}
				height={50}
				width={50}
				alt="Profile Picture"></Image>
		</div>
	);
}
