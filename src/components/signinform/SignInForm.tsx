"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useAppDispatch } from "@/redux/store";
import styles from "@/styles/components/signin/signin.module.css";

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
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					name="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="text"
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
			</form>
			<Link href={"/signup"}>Don't have an account? Sign up here</Link>
		</div>
	);
}
