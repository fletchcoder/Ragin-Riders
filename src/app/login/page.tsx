import { Metadata } from "next";
import SignInForm from "@/components/auth/SignInForm";
import styles from "@/styles/login.module.css";

export const metadata: Metadata = {
	title: "Log In To Your Account",
};

export default function Login() {
	return (
		<main className={styles.main}>
			<SignInForm />
		</main>
	);
}
