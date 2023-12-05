import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Logo, Sizer } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<div
				className={
					'px-16 py-8 bg-blue-primary min-h-screen ' + inter.className
				}>
				<h1 className="text-4xl uppercase tracking-wide text-title text-center md:text-left">
					Eat The City
				</h1>
				<Sizer height={64} />
				<main className="flex flex-col items-center justify-between">
					<Logo />
					<Sizer height={32} />
					<Link
						href={'/browse'}
						className="text-white text-3xl transition">
						Explore crawls
						<div className="w-full h-1 bg-accent" />
					</Link>
				</main>
			</div>
		</>
	);
}
