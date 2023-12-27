import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Page/Header";
import Footer from "@/components/Page/Footer";
import AppContainer from "@/components/Page/AppContainer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import GridProvider from "@/components/UI/Grid/Provider";
import "@/style/main.scss";

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
          <AppContainer>{children}</AppContainer>
          <Footer />

          <FooterMobile />

          <div id="portal"></div>
        </GridProvider>
      </body>
    </html>
  );
}
