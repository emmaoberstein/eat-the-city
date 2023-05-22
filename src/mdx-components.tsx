import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

import map1 from '@/app/images/crawls/1/map.png';
import fuskahouse_cart from '@/app/images/crawls/1/fuskahouse_cart.jpg';
import fuskahouse from '@/app/images/crawls/1/fuskahouse.jpg';
import lhasa from '@/app/images/crawls/1/lhasa.jpg';
import arepa from '@/app/images/crawls/1/arepa.jpg';
import lanueva from '@/app/images/crawls/1/lanueva.jpg';
import mariscos from '@/app/images/crawls/1/mariscos.jpg';
import louies from '@/app/images/crawls/1/louies.jpg';
import nepali from '@/app/images/crawls/1/nepali.jpg';

const images: any = {
	fuskahouse,
	'1/fuskahouse_cart.jpg': fuskahouse_cart,
	'1/fuskahouse.jpg': fuskahouse,
	'1/map.png': map1,
	'1/lhasa.jpg': lhasa,
	'1/arepa.jpg': arepa,
	'1/lanueva.jpg': lanueva,
	'1/mariscos.jpg': mariscos,
	'1/louies.jpg': louies,
	'1/nepali.jpg': nepali,
};

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
		img: ({ src, title, alt }) => (
			<>
				<span className="flex flex-col w-3/4 mx-auto p-4">
					<Image
						src={images[src!]}
						alt={alt!}
						className="object-contain overflow-hidden rounded-md"
					/>
					{title && (
						<span className="text-center italic text-gray-700 text-sm">
							{title}
						</span>
					)}
				</span>
			</>
		),
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
