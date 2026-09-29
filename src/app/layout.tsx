import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/shaders/threeui.css";

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ashutosh Kumar Sharma — AI/ML & Full-Stack Developer",
  description:
    "Portfolio of Ashutosh Kumar Sharma, a Computer Science Engineering student specializing in Artificial Intelligence, Machine Learning and full-stack development.",
  keywords: [
    "Ashutosh Kumar Sharma",
    "AI/ML Developer",
    "Full-Stack Developer",
    "Computer Science",
    "Machine Learning",
    "Computer Vision",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Ashutosh Kumar Sharma" }],
  creator: "Ashutosh Kumar Sharma",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ashutosh Kumar Sharma — AI/ML & Full-Stack Developer",
    description:
      "Portfolio of Ashutosh Kumar Sharma, a Computer Science Engineering student specializing in Artificial Intelligence, Machine Learning and full-stack development.",
    url: "https://ashutoshsharma.dev",
    siteName: "Ashutosh Kumar Sharma Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Kumar Sharma — AI/ML & Full-Stack Developer",
    description:
      "Portfolio of Ashutosh Kumar Sharma, a Computer Science Engineering student specializing in Artificial Intelligence, Machine Learning and full-stack development.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
