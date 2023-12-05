import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Sizer } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Browse() {
	return (
		<>
			<div
				className={'px-16 py-8 bg-blue-light min-h-screen ' + inter.className}>
				<main className="flex flex-col items-center justify-between">
					<Sizer height={32} />
				</main>
				<Link
					href={'/crawls/1'}
					className="text-blue-600 dark:text-blue-500 hover:underline">
					Jackson Heights - Around The World
				</Link>
				<main className="flex flex-col items-center justify-between">
					<Sizer height={8} />
				</main>
				<Link
					href={'/crawls/2'}
					className="text-blue-600 dark:text-blue-500 hover:underline">
					Astoria
				</Link>
				<main className="flex flex-col items-center justify-between">
					<Sizer height={8} />
				</main>
				<Link
					href={'/crawls/3'}
					className="text-blue-600 dark:text-blue-500 hover:underline">
					Flushing
				</Link>
			</div>
		</>
	);
}
