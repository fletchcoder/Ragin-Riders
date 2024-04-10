"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";
import styles from "@/styles/page.module.css";

export default function Home() {
	const [bar, showBar] = useState(false);

	function toggleBar(): void {
		showBar(!bar);
	}

	return (
		<>
			<main className={styles.main}>
				<video autoPlay loop muted playsInline className={styles.backVideo}>
					<source src={"/cycle_racing.mp4"} type="video/mp4"></source>
				</video>
				<section className={styles.top}>
					<div className={bar ? styles.sidebar : styles.hidebar}>
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
										onClick={() => {
											toggleBar();
										}}
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
					<h1 className={styles.tagline}>
						MOTORCYCLE PARTS, ACCESSORIES, & MORE
					</h1>
				</section>
				<section className={styles.about}>
					<h1>About Us</h1>
					<p>
						At Ragin' Riders, we provide the highest quality parts for our
						customers. We started as a motorcycle repair shop and slowly
						expanded into a full-fledged motorcycle store. Our small team
						ensures intimate one-on-one customer interaction and smooth
						transactions throughout the purchasing process. You can find all of
						your motorcycle needs here - parts, gear, and accessories. For over
						20 years, Ragin' Riders has served bikers in the Greater Sacramento
						region. We guarantee customer satisfaction or your money back.
					</p>
				</section>
				<section className={styles.products}>
					<h1>Our Products</h1>
					<div className={styles.select}>
						<div className={styles.part}>
							<Link href={"/shop/?search=helmets"}>
								<Image
									src={"/helmet.png"}
									height={200}
									width={200}
									alt={`Motorcycle Helmet PNG for Ragin' Riders Home Page`}></Image>
							</Link>
							<p>Helmets</p>
						</div>
						<div className={styles.part}>
							<Link href={"/shop/?search=gloves"}>
								<Image
									src={"/gloves.png"}
									height={200}
									width={200}
									alt={`Racing Gloves PNG for Ragin' Riders Home Page`}></Image>
							</Link>
							<p>Gloves</p>
						</div>
						<div className={styles.part}>
							<Link href={"/shop/?search=parts"}>
								<Image
									src={"/battery.png"}
									height={200}
									width={200}
									alt={`Battery PNG for Ragin' Riders Home Page`}></Image>
							</Link>
							<p>Parts</p>
						</div>
						<div className={styles.part}>
							<Link href={"/shop/?search=bags"}>
								<Image
									src={"/backpack.png"}
									height={200}
									width={200}
									alt={`Motorcycle Helmet Bag PNG for Ragin' Riders Home Page`}></Image>
							</Link>
							<p>Bags</p>
						</div>
					</div>
				</section>
				<Footer />
			</main>
		</>
	);
}
