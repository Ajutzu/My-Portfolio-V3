import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  alternates: {
    canonical: "http://localhost:3000/",
  },
  title: "AJ Castillo",
  icons: {
    icon: "./portfolioIcon.png", // Path to your favicon
  },
  description:
    "Aeron James A. Castillo – Full-Stack Developer, Web Enthusiast, and Future DevOps Engineer.",
  keywords:
    "Aeron James Castillo, Aeron James, AJ Castillo, Full-Stack Developer, Web Development, DevOps, UI/UX Design, PHP, JavaScript, React, Node.js",
  openGraph: {
    locale: "en_US",
    siteName: "Aeron James Castillo",
    type: "website",
    title: "Aeron James Castillo",
    description:
      "Aeron James A. Castillo – Full-Stack Developer, Web Enthusiast, and Future DevOps Engineer.",
    url: "https://yourwebsite.com", 
    images: [
      {
        url: "./aj-castillo-og.jpg", 
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeron James Castillo",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

