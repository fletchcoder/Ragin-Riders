"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/components/home/nav.module.css";

export default function HomeNav() {
	const [bar, showBar] = useState(false);

	return (
		<>
			<div className={bar ? styles.sidebar : styles.hidebar}>
				<nav>
					<ul>
						<li>
							<Link prefetch={false} href={"/shop"}>
								Shop
							</Link>
							<svg
								onClick={() => showBar(!bar)}
								className={styles.close}
								xmlns="http://www.w3.org/2000/svg"
								height="50"
								viewBox="0 -960 960 960"
								width="50">
								<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
							</svg>
						</li>
						<li>
							<Link prefetch={false} href={"/contact"}>
								Contact
							</Link>
						</li>
						<li>
							<Link prefetch={false} href={"/join"}>
								Join Us
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className={styles.navbar}>
				<div className={styles.logo}>
					<Image
						src={"/icon.ico"}
						alt={`Logo for Ragin' Riders`}
						width={70}
						height={70}></Image>
					<Link prefetch={false} href={"/"}>
						<h1>RAGIN' RIDERS</h1>
					</Link>
				</div>

				<nav>
					<ul>
						<li className={styles.hideOnMobile}>
							<Link prefetch={false} href={"/shop"}>
								Shop
							</Link>
						</li>
						<li className={styles.hideOnMobile}>
							<Link prefetch={false} href={"/contact"}>
								Contact
							</Link>
						</li>
						<li className={styles.hideOnMobile}>
							<Link prefetch={false} href={"/join"}>
								Join Us
							</Link>
						</li>
						<li className={styles.menu}>
							<svg
								onClick={() => showBar(!bar)}
								xmlns="http://www.w3.org/2000/svg"
								height="50"
								viewBox="0 -960 960 960"
								width="50">
								<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
							</svg>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
