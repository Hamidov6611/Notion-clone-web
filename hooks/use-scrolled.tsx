"use clinet";
import { useEffect, useState } from "react";

export const UseScrolled = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll); 
  }, []);

  return scrolled;
};
