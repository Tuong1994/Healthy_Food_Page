import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AppContainer from "@/components/Page/AppContainer";
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
        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  );
}
