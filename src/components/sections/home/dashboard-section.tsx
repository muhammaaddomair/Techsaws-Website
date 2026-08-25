import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import DashboardPreviewImg from "../../../../public/images/dashboard-screenshot-img.png";

function DashboardSection() {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home-hero-img.png')",
      }}
    >
      <div className="page-layout section-tight">
        <div className="w-full h-full glass-bg-dark rounded-lg py-4 px-8">
          <p className="mb-12 text-base font-manrope font-extrabold uppercase tracking-[0.32em] text-sub-heading relative inline-block">
            Solutions
            <span className="absolute bottom-3 left-0 -z-10 h-5 w-full rounded-full bg-sub-heading/20 blur-xl" />
          </p>

          <div className="flex items-end justify-between mb-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-manrope font-medium max-w-87.5">
                Steamline Your Project with Progress
              </h1>

              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-lg bg-white px-4 py-3.5 text-sm font-manrope font-medium text-black transition-transform duration-300 hover:scale-[1.02] tracking-wide"
                >
                  Get Started
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                    <ArrowRight size={12} />
                  </div>
                </Link>
                <Link
                  href="/"
                  className="glass-bg rounded-lg px-4 py-3.5 text-sm font-manrope font-normal text-heading transition-transform duration-300 hover:scale-[1.02] tracking-wide"
                >
                  Login Account
                </Link>
              </div>
            </div>

            <p className="text-lg leading-relaxed font-light max-w-md">
              TechSaws builds AI, software, revenue, and security systems that
              help businesses operate smarter, grow faster, and scale.
            </p>
          </div>

          <Image
            src={DashboardPreviewImg}
            alt="Dashboard Preview"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default DashboardSection;
