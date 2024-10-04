import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const runtime = "edge";

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
  title: "CassetteOne - Ambience & Music",
  description: "A retro design cassette player.",
  itunes: {
    appId: "6683308033",
  },
  keywords: [
    "Cassette",
    "Player",
    "LEMO FM",
    "SOLOS",
    "B Sides",
    "White noise",
    "Ambience",
    "Apple Music",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full p-5 md:p-10 bg-neutral-950 text-white`}
      >
        <div className="w-full h-full overflow-auto rounded-xl bg-neutral-900 shadow-inner shadow-neutral-900">
          {children}
        </div>
      </body>
    </html>
  );
}
