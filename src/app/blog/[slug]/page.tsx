import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icons";

interface BlogPostPageProps {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	const posts = await getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
	const post = await getPostBySlug(params.slug);
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://meherullah.dev/";

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: post.title,
		description: post.excerpt,
		keywords: post.tags || [],
		authors: [{ name: "Meher Ullah Khan Raj", url: siteUrl }],
		openGraph: {
			title: post.title,
			description: post.excerpt,
			type: "article",
			publishedTime: post.date,
			authors: ["Meher Ullah Khan Raj"],
			tags: post.tags || [],
			url: `${siteUrl}/blog/${params.slug}`,
		},
		alternates: {
			canonical: `${siteUrl}/blog/${params.slug}`,
		},
	};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		notFound();
	}

	return (
		<div className="container article-wrap">
			<Link href="/blog" className="article-back">
				<Icon.arrowLeft /> Back to Blog
			</Link>

			<header className="article-head">
				{post.tags && post.tags.length > 0 && (
					<div className="article-tags">
						{post.tags.map((tag) => (
							<span key={tag}>{tag}</span>
						))}
					</div>
				)}
				<h1>{post.title}</h1>
				<div className="article-byline">
					<time dateTime={post.date}>
						{new Date(post.date).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</time>
					<span className="sep">·</span>
					<span>{post.readTime}</span>
				</div>
				{post.excerpt && <p className="article-excerpt">{post.excerpt}</p>}
			</header>

			<article
				className="prose"
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>

			<div className="article-author">
				<img src="/avatar.jpg" alt="Meher Ullah Khan Raj" width={44} height={44} />
				<div>
					<p className="an">Meher Ullah Khan Raj</p>
					<p className="ad">
						Software Engineer at Snappymob · TypeScript, React, Next.js, Node.js
						· Kuala Lumpur, Malaysia
					</p>
				</div>
			</div>
		</div>
	);
}
