"use client";

import React from "react";
import { useNotDisplay } from "@/hooks";
import Header from "../Header";
import Footer from "../Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import GridProvider from "@/components/UI/Grid/Provider";
import AppLang from "../AppLang";

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  const notDisplay = useNotDisplay();

  const fullScreenClassName = notDisplay ? "main-full" : "";

  return (
    <GridProvider>
      <AppLang>
        <Header />
        <main className={`main ${fullScreenClassName}`}>
          <React.Fragment>{children}</React.Fragment>
        </main>
        <Footer />
        <FooterMobile />
        <div id="portal"></div>
      </AppLang>
    </GridProvider>
  );
};

export default AppContainer;
