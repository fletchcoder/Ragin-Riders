import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Blog from "@/components/blogs/Blog";
import blogService from "@/lib/services/blogService";
import styles from "@/styles/blogs.module.css";

export const metadata: Metadata = {
	title: "Our Blogs | Ragin' Riders",
};

export default async function Blogs({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const posts = await blogService.getAllBlogs();

	return (
		<main className={styles.main}>
			<Header searchParams={searchParams} />
			<section className={styles.container}>
				{posts.map((post, index) => (
					<Blog post={post} key={index} />
				))}
			</section>
			<Footer />
		</main>
	);
}
