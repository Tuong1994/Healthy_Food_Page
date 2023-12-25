import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Page/Header";
import Footer from "@/components/Page/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import "@/style/main.scss";
import GridProvider from "@/components/UI/Grid/Provider";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healthy Food",
  description: "Food Supplier",
  icons: "/logo/logo-no-background-short.svg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GridProvider>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </GridProvider>

        <FooterMobile />
        
        <div id="portal"></div>
      </body>
    </html>
  );
}
