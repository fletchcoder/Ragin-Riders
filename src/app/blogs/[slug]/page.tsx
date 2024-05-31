import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
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
			<section className={styles.container}>
				<h1>{post.title}</h1>
				<Image
					priority
					src={post.image}
					height={400}
					width={400}
					alt={`${post.title} Blog Image`}></Image>
				<div className={styles.author}>
					<h2>By {post.author}</h2>
					<h2>{post.date}</h2>
				</div>
				<p>{post.para1}</p>
				<p>{post.para2}</p>
			</section>
			<Footer />
		</main>
	);
}
