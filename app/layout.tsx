import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Page/Header";
import FooterMenu from "@/components/Mobile/FooterMenu";
import "@/style/main.scss";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healthy-F",
  description: "Food Ecommerce",
  icons: "/logo/logo-no-background-short.svg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <FooterMenu />
        <div id="portal"></div>
      </body>
    </html>
  );
}
