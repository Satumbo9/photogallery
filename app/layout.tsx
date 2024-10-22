import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderPage from "@/components/ui/Header";
import NavMenu from "@/components/ui/NavMenu";
import Footer from "@/components/ui/Footer";
import ThemeContextProvider from "@/components/context/ThemeContext";
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
  title: {
    default: "Bface",
    template: "%s | Bface",
  },
  description: "Bface - Beautiful Face",
  icons: {
    icon: "/icon/bf-icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex w-screen h-screen    antialiased`}
      >
        {" "}
        <ThemeContextProvider>
          <NavMenu />
          <div className="size-full">
            <HeaderPage />
            {children}
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
