"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useAppDispatch } from "@/redux/store";
import styles from "@/styles/components/auth/auth.module.css";

export default function SignInForm() {
	const dispatch = useAppDispatch();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
	}

	return (
		<div className={styles.container}>
			<h2>Log In To Your Account</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					name="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="email"
					placeholder="Email"
					name="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					name="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Log In</button>
			</form>
			<Link href={"/signup"}>Don't have an account? Sign up here</Link>
			<Link href={"/shop"}>&larr; Back to Shop</Link>
		</div>
	);
}
