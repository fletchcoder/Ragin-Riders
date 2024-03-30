"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Search from "./search/Search";
import styles from "@/styles/components/header.module.css";

export default function Header({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | string | undefined };
}) {
	const search =
		typeof searchParams.search === "string" ? searchParams.search : undefined;

	const [sidebar, setSideBar] = useState(false);

	function toggleBar() {
		setSideBar(!sidebar);
	}
	return (
		<>
			<div className={styles.header}>
				<div className={styles.left}>
					<svg
						onClick={() => {
							toggleBar();
						}}
						xmlns="http://www.w3.org/2000/svg"
						height="50"
						viewBox="0 -960 960 960"
						width="50">
						<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
					</svg>
					<Link prefetch={false} href={"/"}>
						<Image
							className={styles.logo}
							src={"/icon.ico"}
							height={50}
							width={50}
							alt={`Header PNG Image for Ragin' Riders`}></Image>
					</Link>
					<nav>
						<ul>
							<li>
								<Link prefetch={false} href={"/shop"}>
									Shop
								</Link>
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
					<Search search={search} />
				</div>

				<div className={styles.right}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24">
						<path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
					</svg>
					<p>Sign In</p>
				</div>
			</div>
			<div className={sidebar ? styles.sidebar : styles.hidebar}>
				<nav>
					<ul>
						<li>
							<Link prefetch={false} href={"/shop"}>
								Shop
							</Link>
							<svg
								onClick={() => {
									toggleBar();
								}}
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
		</>
	);
}
