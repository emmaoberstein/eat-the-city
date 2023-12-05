import squirrel from '/public/images/main-squirrel.png';
import Image from 'next/image';

export function Sizer({ height = 0, width = 0 }) {
	return <div style={{ height, width }} />;
}

export function Logo({ height, width }: { height?: number; width?: number }) {
	return (
		<Image
			src={squirrel}
			alt="Cute squirrel"
			height={height}
			width={width}
		/>
	);
}
