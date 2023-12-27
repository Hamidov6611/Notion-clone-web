import { ChildProps } from "@/types";
import React from "react";
import { Footer, Navbar } from "./components";

const HomeLayout = ({ children }: ChildProps) => {
  return (
    <div className="h-full">
      <link rel="icon" href="/logo.svg" />

      <header>
        <Navbar />
      </header>
      <main className="h-full pt-40 ">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
