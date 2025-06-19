import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Dennis Macapagal",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Used as the default description meta property and webmanifest description
	description: "An opinionated starter theme for Astro",
	// HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
	// Used to construct the meta title property found in src/components/BaseHead.astro L:11, and webmanifest name found in astro.config.ts L:42
	title: "Company Name",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: {
	path: string;
	title: string;
	subLinks?: {
		path: string;
		title: string;
		subLinksLevel?: number;
		subLinks?: {
			path: string;
			title: string;
			subLinksLevel?: number;
			subLinks?: {
				path: string;
				title: string;
				subLinksLevel?: number;
				subLinks?: {
					path: string;
					title: string;
					subLinksLevel?: number;
				}[];
			}[];
		}[];
	}[];
	subLinksLevel?: number;
}[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/about/",
		title: "About",
		subLinks: [
			{
				path: "/about/team/",
				title: "Our Team",
				subLinks: [
					{
						path: "/about/team/leadership/",
						title: "Leadership",
						subLinks: [
							{
								path: "/about/team/leadership/board/",
								title: "Board of Directors",
							},
							{
								path: "/about/team/leadership/executives/",
								title: "Executives",
							},
						],
						subLinksLevel: 4,
					},
					{
						path: "/about/team/departments/",
						title: "Departments",
					},
				],
				subLinksLevel: 3,
			},
			{
				path: "/about/history/",
				title: "Our History",
			},
			{
				path: "/about/mission/",
				title: "Mission & Vision",
			},
		],
		subLinksLevel: 2,
	},
	{
		path: "/posts/",
		title: "Blog",
		subLinks: [
			{
				path: "/posts/categories/",
				title: "Categories",
				subLinks: [
					{
						path: "/posts/categories/technology/",
						title: "Technology",
						subLinks: [
							{
								path: "/posts/categories/technology/frontend/",
								title: "Frontend Development",
							},
							{
								path: "/posts/categories/technology/backend/",
								title: "Backend Development",
							},
							{
								path: "/posts/categories/technology/devops/",
								title: "DevOps",
							},
						],
						subLinksLevel: 3,
					},
					{
						path: "/posts/categories/lifestyle/",
						title: "Lifestyle",
					},
					{
						path: "/posts/categories/travel/",
						title: "Travel",
					},
				],
				subLinksLevel: 2,
			},
			{
				path: "/posts/archives/",
				title: "Archives",
			},
			{
				path: "/posts/tags/",
				title: "Tags",
			},
		],
		subLinksLevel: 2,
	},
	{
		path: "/notes/",
		title: "Notes",
		subLinks: [
			{
				path: "/notes/personal/",
				title: "Personal Notes",
			},
			{
				path: "/notes/work/",
				title: "Work Notes",
			},
		],
		subLinksLevel: 2,
	},
	{
		path: "/contact/",
		title: "Contact",
		subLinks: [
			{
				path: "/contact/support/",
				title: "Support",
			},
			{
				path: "/contact/sales/",
				title: "Sales",
			},
		],
		subLinksLevel: 2,
	},
];