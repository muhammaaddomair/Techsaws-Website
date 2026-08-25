"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

import { HeaderNavData } from "@/data/layout-data";
import { useModals } from "@/providers/modals-provider";

import Sidebar from "./sidebar/sidebar";
import { ServicesDropdown } from "./services-dropdown";

import LogoWhite from "../../../public/favicons/logo.png";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOverLightBackground, setIsOverLightBackground] = useState(false);
  const { openConnectModal } = useModals();

  const pathname = usePathname();

  useEffect(() => {
    if (!sidebarOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [sidebarOpen]);

  useEffect(() => {
    let frame = 0;

    const updateContrast = () => {
      frame = 0;
      const sampleY = Math.min(112, window.innerHeight - 1);
      const candidates = document
        .elementsFromPoint(window.innerWidth / 2, sampleY)
        .filter((element) => !element.closest("header"));

      let lightBackground = false;

      for (const element of candidates) {
        let current: Element | null = element;
        while (current) {
          const color = window.getComputedStyle(current).backgroundColor;
          const match = color.match(/rgba?\((\d+)[, ]+(\d+)[, ]+(\d+)(?:\s*[,/]\s*([\d.]+))?\)/);
          if (match && Number(match[4] ?? 1) > 0.45) {
            const [, red, green, blue] = match.map(Number);
            lightBackground = (0.2126 * red + 0.7152 * green + 0.0722 * blue) > 170;
            current = null;
            break;
          }
          current = current.parentElement;
        }
        if (current === null) break;
      }

      setIsOverLightBackground(lightBackground);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateContrast);
    };

    updateContrast();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const glassClass = isOverLightBackground
    ? "bg-white/88 shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
    : "bg-glass";
  const navTextClass = isOverLightBackground ? "text-black" : "text-heading";

  return (
    <>
      <header className="fixed w-full z-50 flex items-center justify-center">
        <div className="page-layout flex items-center justify-between py-6 max-md:hidden">
          <Link
            href="/"
            className={`${glassClass} rounded-full h-23 w-23 flex items-center justify-center backdrop-blur-2xl transition-all duration-500 hover:scale-105`}
          >
            <Image
              src={LogoWhite}
              alt="Logo"
              className={`w-14 h-12 translate-y-1 transition-[filter] duration-300 ${isOverLightBackground ? "brightness-0" : ""}`}
            />
          </Link>

          <div className={`${glassClass} flex items-center gap-1 rounded-lg pl-2 pr-1.5 py-2 backdrop-blur-2xl transition-colors duration-300`}>
            {HeaderNavData.map((item, index) => {
              if (item.isSubCategory) {
                return <ServicesDropdown key={index} item={item} lightHeader={isOverLightBackground} />;
              }

              const isActive = pathname === item.path;

              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`relative rounded-xl px-3.5 py-3 text-sm font-medium font-manrope ${navTextClass} transition-colors duration-300 after:absolute after:left-3.5 after:right-3.5 after:bottom-2 after:h-0.5 after:rounded-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100`}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute left-3.5 right-3.5 bottom-2 h-px bg-primary" />
                  )}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={openConnectModal}
              className="group relative ml-3 flex items-center gap-3 rounded-lg bg-black px-4 py-3.5 text-sm font-manrope font-light text-heading transition-transform duration-300 hover:scale-[1.02] tracking-wide"
            >
              Get Started
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
                <ArrowRight size={12} />
              </div>
              <span className="pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap rounded-md bg-black/80 px-2.5 py-1.5 text-xs text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                Have a project in mind?
              </span>
            </button>
          </div>
        </div>

        <div className="page-layout py-6 md:hidden">
          <div className={`${glassClass} flex items-center justify-between rounded-full px-6 h-15 backdrop-blur-2xl transition-colors duration-300`}>
            <Link href="/">
              <Image
                src={LogoWhite}
                alt="Logo"
                className={`w-auto h-10 transition-all duration-500 hover:scale-105 ${isOverLightBackground ? "brightness-0" : ""}`}
              />
            </Link>

            <button
              type="button"
              aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={sidebarOpen}
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
              }}
              className="flex items-center justify-center rounded-lg bg-black p-2 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Menu strokeWidth={2.5} className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
