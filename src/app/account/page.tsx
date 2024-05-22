import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccountInfo from "@/components/account/AccountInfo";
import styles from "@/styles/account.module.css";

export default function AccountPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	return (
		<main className={styles.main}>
			<Header searchParams={searchParams} />
			<section className={styles.container}>
				<AccountInfo />
			</section>
			<Footer />
		</main>
	);
}
