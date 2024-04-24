import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "@/styles/page.module.css";
import HomeNav from "@/components/home/HomeNav";

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<video autoPlay loop muted playsInline className={styles.backVideo}>
					<source src={"/cycle_racing.mp4"} type="video/mp4"></source>
				</video>
				<section className={styles.top}>
					<HomeNav />
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
							<Link href={"/search?query=helmets"}>
								<Image
									src={"/helmet.png"}
									height={200}
									width={200}
									alt={`Motorcycle Helmet PNG for Ragin' Riders Home Page`}></Image>
							</Link>
							<p>Helmets</p>
						</div>
						<div className={styles.part}>
							<Link href={"/search?query=gloves"}>
								<Image
									src={"/gloves.png"}
									height={200}
									width={200}
									alt={`Racing Gloves PNG for Ragin' Riders Home Page`}></Image>
							</Link>
							<p>Gloves</p>
						</div>
						<div className={styles.part}>
							<Link href={"/search?query=parts"}>
								<Image
									src={"/battery.png"}
									height={200}
									width={200}
									alt={`Battery PNG for Ragin' Riders Home Page`}></Image>
							</Link>
							<p>Parts</p>
						</div>
						<div className={styles.part}>
							<Link href={"/search?query=bags"}>
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
