"use client"; // Adiciona essa linha para declarar o componente como cliente

import { useEffect } from 'react';

export function useScrollToTop() {
  useEffect(() => {
    const scrollFunction = () => {
      const scrollBtn = document.getElementById("scrollToTopBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (scrollBtn) scrollBtn.style.display = "block";
      } else {
        if (scrollBtn) scrollBtn.style.display = "none";
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15),
          scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
              window.scrollBy(0, scrollStep);
            } else clearInterval(scrollInterval);
          }, 15);
  };

  return scrollToTop;
}
