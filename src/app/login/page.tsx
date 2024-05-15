import SignInForm from "@/components/signinform/SignInForm";
import styles from "@/styles/login.module.css";

export default function Login() {
	return (
		<main className={styles.main}>
			<SignInForm />
		</main>
	);
}
