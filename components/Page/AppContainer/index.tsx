"use client";

import React from "react";
import { useNotDisplay } from "@/hooks";

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  const notDisplay = useNotDisplay();

  const fullScreenClassName = notDisplay ? "main-full" : "";

  return <main className={`main ${fullScreenClassName}`}>{children}</main>;
};

export default AppContainer;
