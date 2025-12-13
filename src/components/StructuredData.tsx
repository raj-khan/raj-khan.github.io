export function StructuredData() {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://meherullah.dev/";

	// Person Schema (Primary identity)
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": `${siteUrl}/#person`,
		name: "Md Meher Ullah",
		alternateName: "Meher Ullah Khan Raj",
		url: siteUrl,
		image: `${siteUrl}/profile-image.jpg`,
		jobTitle: "AI-Augmented Software Engineer",
		description:
			"AI-Augmented Software Engineer with 8+ years of experience specializing in TypeScript, React, Next.js, and AWS. Expert in building financial applications, HRM systems, and custom software solutions.",
		email: "meherullah97@gmail.com",
		telephone: "+60-XXX-XXXX", // Add if you want to share
		address: {
			"@type": "PostalAddress",
			addressLocality: "Kuala Lumpur",
			addressCountry: "Malaysia",
		},
		sameAs: [
			"https://www.linkedin.com/in/raajkhan",
			"https://github.com/raj-khan",
			"https://rajkhaan.medium.com",
		],
		knowsAbout: [
			"AI-Augmented Development",
			"TypeScript",
			"JavaScript",
			"Node.js",
			"React",
			"Next.js",
			"NestJS",
			"AWS",
			"PostgreSQL",
			"Docker",
			"Kubernetes",
			"Financial Applications",
			"HRM Systems",
			"Custom Software Development",
			"GitHub Copilot",
			"Cursor AI",
			"Claude AI",
		],
		alumniOf: {
			"@type": "Organization",
			name: "Your University", // Update with actual education
		},
		hasOccupation: {
			"@type": "Occupation",
			name: "Software Engineer",
			occupationLocation: {
				"@type": "City",
				name: "Kuala Lumpur",
			},
			estimatedSalary: {
				"@type": "MonetaryAmountDistribution",
				name: "Senior Software Engineer",
				currency: "MYR",
			},
			skills:
				"TypeScript, JavaScript, Node.js, React, Next.js, NestJS, AWS, PostgreSQL, Docker, Kubernetes",
		},
	};

	// Website Schema
	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${siteUrl}/#website`,
		url: siteUrl,
		name: "Md Meher Ullah - AI-Augmented Software Engineer",
		description:
			"Portfolio and blog of Md Meher Ullah, an AI-Augmented Software Engineer specializing in full-stack development with TypeScript, React, Next.js, and AWS.",
		publisher: {
			"@id": `${siteUrl}/#person`,
		},
		inLanguage: "en-US",
	};

	// Professional Service Schema
	const professionalServiceSchema = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"@id": `${siteUrl}/#service`,
		name: "Md Meher Ullah - Software Development Services",
		image: `${siteUrl}/profile-image.jpg`,
		description:
			"Professional software development services specializing in AI-augmented development, full-stack applications, financial systems, HRM solutions, and custom software development.",
		provider: {
			"@id": `${siteUrl}/#person`,
		},
		areaServed: {
			"@type": "Country",
			name: "Malaysia",
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Software Development Services",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Full-Stack Web Development",
						description:
							"Custom web application development using React, Next.js, Node.js, and TypeScript",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Financial Application Development",
						description:
							"Specialized development of financial and fintech applications",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "HRM System Development",
						description:
							"Human Resource Management system design and implementation",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "AWS Cloud Architecture",
						description:
							"Cloud infrastructure design and implementation using AWS services",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "AI-Augmented Development",
						description:
							"Leveraging AI tools like GitHub Copilot, Cursor, and Claude for accelerated development",
					},
				},
			],
		},
	};

	// ProfilePage Schema
	const profilePageSchema = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		"@id": `${siteUrl}/#profilepage`,
		url: siteUrl,
		name: "Md Meher Ullah - Professional Portfolio",
		description:
			"Professional portfolio showcasing software engineering projects, skills, and expertise in AI-augmented development",
		mainEntity: {
			"@id": `${siteUrl}/#person`,
		},
	};

	// BreadcrumbList Schema
	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: siteUrl,
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(professionalServiceSchema),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
		</>
	);
}
