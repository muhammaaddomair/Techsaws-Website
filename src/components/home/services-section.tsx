import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import foldsImage from "../../../public/assets/images/sections/services-folds.png";
import ribbonsImage from "../../../public/assets/images/sections/services-ribbons.png";
import ringsImage from "../../../public/assets/images/sections/services-rings.png";
import waveImage from "../../../public/assets/images/sections/services-wave.png";
import styles from "./services-section.module.css";

const services = [
  {
    title: "AI & Automation",
    body: "Drive measurable business value with intelligent systems that automate workflows, improve decisions, and scale execution across your business.",
    href: "/services/ai-automation",
    image: ribbonsImage,
    lowerArtwork: true,
  },
  {
    title: "Backend & Infrastructure",
    body: "Design scalable APIs, databases, cloud environments, and operational systems that keep products fast, reliable, and ready to grow.",
    href: "/services/backend-infrastructure",
    image: waveImage,
    lowerArtwork: false,
  },
  {
    title: "Cyber Defense",
    body: "Protect critical systems with offensive security, secure architecture, access controls, monitoring, and compliance-ready foundations.",
    href: "/services/cyber-defense",
    image: ringsImage,
    lowerArtwork: true,
  },
  {
    title: "Revenue & Growth",
    body: "Connect strategy, automation, funnels, CRM, and analytics into one system that captures demand and turns it into predictable revenue.",
    href: "/services/revenue-growth",
    image: foldsImage,
    lowerArtwork: true,
  },
];

export function ServicesSection() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="services-title">
            <span>Services.</span> We transform ambitious ideas into reliable
            systems that automate work, strengthen operations, and unlock
            scalable growth.
          </h2>
        </div>

        <div className={styles.cards}>
          {services.map((service) => (
            <article key={service.title} className={styles.card} tabIndex={0}>
              <div className={styles.copy}>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
              <Link href={service.href} className={styles.learnMore}>
                Learn more <ArrowRight aria-hidden="true" />
              </Link>
              <Image
                src={service.image}
                alt=""
                className={`${styles.wave} ${service.lowerArtwork ? styles.lowerArtwork : ""}`}
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className={styles.tint} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
