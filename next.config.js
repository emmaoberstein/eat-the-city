const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure pageExtensions to include md and mdx
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

	// Optionally, add any other Next.js config below
	reactStrictMode: true,
	experimental: {
		appDir: true,
		// mdxRs: true,
	},
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
