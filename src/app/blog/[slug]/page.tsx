import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

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
		authors: [{ name: "Md Meher Ullah", url: siteUrl }],
		openGraph: {
			title: post.title,
			description: post.excerpt,
			type: "article",
			publishedTime: post.date,
			authors: ["Md Meher Ullah"],
			tags: post.tags || [],
			url: `${siteUrl}/blog/${params.slug}`,
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.excerpt,
			creator: "@raajkhan",
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
		<div className="pt-20">
			<div className="container-max-width section-padding py-16">
				<div className="max-w-4xl mx-auto">
					{/* Back to Blog */}
					<Link
						href="/blog"
						className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
					>
						<svg
							className="w-5 h-5 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						Back to Blog
					</Link>

					{/* Article Header */}
					<header className="mb-12">
						<div className="flex flex-wrap gap-2 mb-4">
							{post.tags?.map((tag, index) => (
								<span
									key={index}
									className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
								>
									{tag}
								</span>
							))}
						</div>

						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
							{post.title}
						</h1>

						<div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
							<time dateTime={post.date} className="mr-4">
								{new Date(post.date).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</time>
							<span>·</span>
							<span className="ml-4">{post.readTime}</span>
						</div>

						{post.excerpt && (
							<p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
								{post.excerpt}
							</p>
						)}
					</header>

					{/* Article Content */}
					<article
						className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-pink-600 dark:prose-code:text-pink-400"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>

					{/* Author Bio */}
					<div className="mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
									MU
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-semibold text-gray-900 dark:text-white">
									Md Meher Ullah
								</h4>
								<p className="text-gray-600 dark:text-gray-300">
									AI-Augmented Software Engineer with 8+ years of experience in
									TypeScript, React, Next.js, and AWS. Based in Kuala Lumpur,
									Malaysia.
								</p>
							</div>
						</div>
					</div>

					{/* Navigation */}
					<div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
						<Link
							href="/blog"
							className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
						>
							View All Posts
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
