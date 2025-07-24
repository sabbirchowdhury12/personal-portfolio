'use client';

import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// Script injector
function TigsawScript() {
  useEffect(() => {
    if (document.getElementById("tigsaw-script")) return;

    const script = document.createElement("script");
    script.id = "tigsaw-script";
    script.setAttribute("tigsaw-id", "LAETQP5C");
    script.innerHTML = `
      (function(t,i,g,s,a,w){
        i=t.currentScript.getAttribute("tigsaw-id");
        (w||window).tigsawContainerId=i;
        g=t.createElement('script');
        g.src='https://static.tigsaw.com/delivery/smartscript.js';
        g.defer=true;
        t.head.appendChild(g);
      })(document,typeof window!=='undefined'?window:this);
    `;
    document.head.appendChild(script);
  }, []);

  return null;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <TigsawScript />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Injects the script into <head> at runtime */}

        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <div className="max-w-5xl mx-auto">{children}</div>
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
