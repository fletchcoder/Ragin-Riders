"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useAppDispatch } from "@/redux/store";
import styles from "@/styles/components/auth/auth.module.css";

export default function SignUpForm() {
	const dispatch = useAppDispatch();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
	}

	return (
		<div className={styles.container}>
			<h2>Create An Account</h2>
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
				<button type="submit">Sign Up</button>
			</form>
			<Link href={"/login"}>Already have an account? Log in here</Link>
			<Link href={"/shop"}>&larr; Back to Shop</Link>
		</div>
	);
}
