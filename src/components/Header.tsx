import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/header.module.css";

export default function Header() {
	return (
		<>
			<div className={styles.header}>
				<Link prefetch={false} href={"/"}>
					<Image
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
				<div className={styles.right}>
					<p>Sign In</p>
				</div>
			</div>
		</>
	);
}
