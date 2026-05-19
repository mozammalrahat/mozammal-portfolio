import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { seoConfig } from "@/lib/data";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords.join(", "),
    authors: [{ name: "Mozammal Hossain", url: "https://mozammal-portfolio.vercel.app" }],
    creator: "Mozammal Hossain",
    metadataBase: new URL(seoConfig.canonicalUrl),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: seoConfig.canonicalUrl,
        siteName: "Mozammal Hossain Portfolio",
        title: seoConfig.title,
        description: seoConfig.description,
        images: [
            {
                url: seoConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "Mozammal Hossain - Software Engineer & AI Researcher",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen bg-background font-sans antialiased scroll-smooth", inter.variable)}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
