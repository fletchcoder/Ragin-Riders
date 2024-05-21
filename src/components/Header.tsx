"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import Search from "./search/Search";
import styles from "@/styles/components/header.module.css";
import { signOut } from "@/redux/auth.slice";

export default function Header({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const search =
		typeof searchParams.search === "string" ? searchParams.search : undefined;

	const [sidebar, setSideBar] = useState(false);
	const [info, displayInfo] = useState(false);
	const dispatch = useAppDispatch();
	const router = useRouter();
	const cart = useAppSelector((state) => state.cart);
	const auth = useAppSelector((state) => state.auth);

	function toggleBar() {
		setSideBar(!sidebar);
	}

	function toggleInfo() {
		displayInfo(!info);
	}

	function getTotalQuantity() {
		let total = 0;
		cart.items.forEach((item) => (total += item.amount));
		return total;
	}

	function signOutUser() {
		dispatch(signOut());
		router.push("/");
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
								<Link prefetch={false} href={"/blogs"}>
									Our Blogs
								</Link>
							</li>
						</ul>
					</nav>
					<Search search={search} />
				</div>

				<div className={styles.right}>
					<ul>
						<li>
							<Link href={"/cart"}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24">
									<path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
								</svg>
							</Link>
							{getTotalQuantity() === 0 ? null : (
								<span>{getTotalQuantity()}</span>
							)}
						</li>
						<li>
							{auth.currentUser ? (
								<ul className={info ? styles.info : styles.account}>
									<li onClick={() => toggleInfo()}>
										<svg
											version="1.1"
											id="Layer_1"
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											viewBox="131 -131 512 512">
											<g id="XMLID_5_">
												<path
													id="XMLID_10_"
													d="M387-131c-141.3,0-256,114.7-256,256s114.7,256,256,256s256-114.7,256-256S528.3-131,387-131z M387-54.3
								   c42.8,0,76.7,33.9,76.7,76.7S429.8,99.1,387,99.1s-76.7-33.9-76.7-76.7S344.2-54.3,387-54.3z M387,309.1
								   c-63.8,0-120.3-33.1-153.4-82.4c0.8-50.9,102.6-79.1,153.4-79.1s152.6,28.3,153.4,79.1C507.3,276,450.8,309.1,387,309.1z"
												/>
											</g>
										</svg>
									</li>
									<li>
										<Link href={"/account"}>Account</Link>
									</li>
									<li onClick={() => signOutUser()}>Sign Out</li>
								</ul>
							) : (
								<Link href={"/login"}>
									<p>Sign In</p>
								</Link>
							)}
						</li>
					</ul>
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
							<Link prefetch={false} href={"/blogs"}>
								Our Blogs
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
