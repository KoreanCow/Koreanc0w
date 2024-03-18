import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navigation from '@/components/navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "KoreanCow | COWLOG",
    template: "KoreanCow | COWLOG | %s"
  },
  description: "COWLOG with Next.js",
  icons: {
    icon: '/favicon-32x32.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
