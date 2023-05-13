import "./globals.css";

export const metadata = {
  title: "Eat the City",
  description: "Discover food crawls in NYC!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
