import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import { cn } from "./../lib/utils";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Soyeb Islam | Web Developer",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
          inter.className,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className="grow">{children} </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
