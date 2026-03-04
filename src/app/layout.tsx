import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Igreja em Sobradinho",
  description: "Jesus Cristo é o Senhor - Igreja em Sobradinho.",
  icons: {
    icon: [
      {
        url: "/dark-icon.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/light-icon.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfairDisplay.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
