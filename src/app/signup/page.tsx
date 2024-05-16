import { Metadata } from "next";
import SignUpForm from "@/components/auth/SignUpForm";
import styles from "@/styles/login.module.css";

export const metadata: Metadata = {
	title: "Sign Up For An Account",
};

export default function Login() {
	return (
		<main className={styles.main}>
			<SignUpForm />
		</main>
	);
}
