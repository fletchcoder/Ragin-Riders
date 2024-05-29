import Header from "@/components/Header";
import Footer from "@/components/Footer";
import blogService from "@/lib/services/blogService";
import { notFound } from "next/navigation";
import styles from "@/styles/blogpage.module.css";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const posts = await blogService.getAllBlogs();

	const blog = posts.find((post) => post.slug === params.slug);

	if (!blog) {
		return {
			title: "Post not found",
		};
	}

	return {
		title: `${blog.title} | Ragin' Blogs`,
	};
}

export default async function BlogPost({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const post = await blogService.getPostBySlug(params.slug);

	if (!post) notFound();

	return (
		<main className={styles.main}>
			<Header searchParams={searchParams} />
			<section></section>
			<Footer />
		</main>
	);
}
