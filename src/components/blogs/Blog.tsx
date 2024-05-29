import type { Blog } from "@/lib/types/Blog";
import Link from "next/link";
import styles from "@/styles/components/blogs/post.module.css";

export default function Blog({ post }: { post: Blog }) {
	return (
		<div className={styles.blog}>
			<Link href={`/blogs/${post.slug}`}>
				<h1>{post.title}</h1>
			</Link>
			<div className={styles.credentials}>
				<h2>{post.author}</h2>
				<h3>{post.date}</h3>
			</div>
		</div>
	);
}
