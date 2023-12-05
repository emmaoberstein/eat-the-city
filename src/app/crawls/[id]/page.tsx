import { Inter } from 'next/font/google';
import { Logo, Sizer } from '@/components';
import { CrawlMeta } from '@/global-types';
import type { MDXContent } from 'mdx/types';
import Link from 'next/link';
import crawl1, { meta as meta1 } from '../markdown/1.mdx';
import crawl2, { meta as meta2 } from '../markdown/2.mdx';
import crawl3, { meta as meta3 } from '../markdown/3.mdx';

type CrawlId = number;

const markdownCrawls: {
	[id: CrawlId]: { content: MDXContent; meta: CrawlMeta };
} = {
	1: { content: crawl1, meta: meta1 },
	2: { content: crawl2, meta: meta2 },
	3: { content: crawl3, meta: meta3 },
};

const inter = Inter({ subsets: ['latin'] });

function Header({ meta }: { meta: CrawlMeta }) {
	return (
		<>
			<header className="flex flex-col md:flex-row md:gap-10 text-center items-center bg-blue-primary p-4 text-foreground">
				<div className="flex-none">
					<Link
						href={'/browse'}
						className="align-left">
						<Logo
							height={64}
							width={64}
						/>
					</Link>
				</div>
				<div className="flex-auto md:mr-[64px]">
					<h1 className="text-4xl">{meta.name}</h1>
					<Sizer height={8} />
					<div className="text-xl">By {meta.author}</div>
				</div>
				<br />
			</header>
		</>
	);
}

export default function Crawl({ params }: any) {
	const { content: CrawlMdx, meta } = markdownCrawls[params.id];
	return (
		<div className={'flex flex-col min-h-screen ' + inter.className}>
			<Header meta={meta} />
			<main className="px-6 py-8 bg-blue-light gap-8">
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
