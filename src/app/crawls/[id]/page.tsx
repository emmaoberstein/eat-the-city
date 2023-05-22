import { Inter } from 'next/font/google';
import { Sizer } from '@/components';
import { CrawlMeta } from '@/global-types';
import type { MDXContent } from 'mdx/types';
import crawl1, { meta as meta1 } from '../markdown/1.mdx';

type CrawlId = number;

const markdownCrawls: {
	[id: CrawlId]: { content: MDXContent; meta: CrawlMeta };
} = {
	1: { content: crawl1, meta: meta1 },
};

const inter = Inter({ subsets: ['latin'] });

function Header({ meta }: { meta: CrawlMeta }) {
	return (
		<header className="flex flex-col text-center items-center bg-tomato-primary p-4 text-foreground">
			<h1 className="text-4xl">{meta.name}</h1>
			<Sizer height={8} />
			<div className="text-xl">By {meta.author}</div>
			<br />
		</header>
	);
}

export default function Crawl({ params }: any) {
	const { content: CrawlMdx, meta } = markdownCrawls[params.id];
	return (
		<div className={'flex flex-col min-h-screen ' + inter.className}>
			<Header meta={meta} />
			<main className="px-6 py-8 bg-tomato-light gap-8">
				<div className="mx-auto flex justify-center">
					<section className="flex flex-col bg-white gap-2 p-8 rounded-md max-w-prose">
						<CrawlMdx />
					</section>
					<aside className="hidden md:block sticky top-0 p-8 max-h-screen">
						<ul className="flex flex-col gap-2 w-max">
							{meta.headings.map((h, i) => (
								<li
									key={i + 1}
									className="text-[#017698]">
									<a href={'#' + h}>{h}</a>
								</li>
							))}
						</ul>
					</aside>
				</div>
			</main>
		</div>
	);
}
