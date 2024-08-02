import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import DonElement from "@/components/don";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}
        <DonElement />
        <Footer />
      </body>
    </html>
  );
}
