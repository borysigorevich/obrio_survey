import { SessionStorageGuard } from '@/guards/session-storage-guard';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Survey',
	description: 'Test Task',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={openSans.className}>
				<SessionStorageGuard>{children}</SessionStorageGuard>
			</body>
		</html>
	);
}
