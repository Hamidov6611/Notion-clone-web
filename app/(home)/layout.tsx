import React from "react";
import { Navbar } from "./components";
import { ChildProps } from "@/types";

const HomeLayout = ({ children }: ChildProps) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default HomeLayout;