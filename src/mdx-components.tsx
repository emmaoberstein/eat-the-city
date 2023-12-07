import type { MDXComponents } from 'mdx/types';
import Image, { StaticImageData } from 'next/image';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => {
			return (
				<h1
					id={children as string}
					className="text-2xl font-bold">
					{children}
				</h1>
			);
		},
		h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
		h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
		img: ({ src, title, alt }) => {
			return (
				<>
					<span className="flex flex-col w-full  mx-auto p-4">
						<Image
							src={`/images/crawls/${src}`}
							alt={alt!}
							className="object-contain overflow-hidden rounded-md mx-auto"
							width={500}
							height={500}
						/>
						{title && (
							<span className="text-center italic text-gray-700 text-sm max-w-[500px]">
								{title}
							</span>
						)}
					</span>
				</>
			);
		},
		a: ({ href, children }) => {
			return (
				<a
					className="text-[#017698] underline"
					href={href}
					target="_blank"
					rel="noopener noreferrer">
					{children}
				</a>
			);
		},
		...components,
	};
}
