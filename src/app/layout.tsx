import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "aiimage",
  description: "Écrit et une image arrive...",
  metadataBase: new URL("https://aiimage.com"),
  openGraph: {
    title: "aiimage",
    description: "Écrit et une image arrive...",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "aiimage",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "aiimage",
    description: "Écrit et une image arrive...",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
