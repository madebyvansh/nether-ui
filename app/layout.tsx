import type { Metadata } from "next";
import { Average_Sans, Commissioner, IBM_Plex_Sans, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const sedan = Poppins({
  variable: "--font-sedan",
  subsets: ["latin"],
  weight: ["400"],
});

const ibm = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nether UI",
  description: "A modern, open-source UI library for React.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sedan.variable} ${ibm.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
