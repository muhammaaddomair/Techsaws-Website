import Image from "next/image";

import styles from "./featured-insights.module.css";

const solutions = [
  {
    category: "Experience",
    title: "Conversion & Experience Systems",
    body: "Design and build high-performance websites, landing pages, funnels, UX improvements, and performance systems that convert visitors into customers.",
    image: "/assets/images/solutions/conversion-experience.png",
  },
  {
    category: "Strategy",
    title: "Strategic Systems & Digital Architecture",
    body: "Plan system architecture, SaaS strategy, AI adoption, infrastructure, and CTO-level decisions before your team commits to a build.",
    image: "/assets/images/solutions/strategic-architecture.png",
  },
  {
    category: "Platforms",
    title: "Product & Platform Systems",
    body: "Create custom web apps, portals, internal systems, white-label platforms, and onboarding or KYC systems tailored to your operations.",
    image: "/assets/images/solutions/product-platforms.png",
  },
  {
    category: "Payments",
    title: "Monetization & Payments",
    body: "Build subscription, billing, checkout, payment integration, and revenue tracking systems that support reliable monetization at scale.",
    image: "/assets/images/solutions/monetization-payments.png",
  },
  {
    category: "Integration",
    title: "Integrations & Middleware",
    body: "Connect APIs, webhooks, event systems, CRMs, ERPs, and middleware so your tools exchange data cleanly and reliably.",
    image: "/assets/images/solutions/integrations-middleware.png",
  },
  {
    category: "Cloud",
    title: "Cloud & DevOps",
    body: "Design cloud architecture across AWS, GCP, or Azure with CI/CD pipelines, containerization, Kubernetes, and deployment workflows.",
    image: "/assets/images/solutions/cloud-devops.png",
  },
  {
    category: "Data",
    title: "Data & Intelligence",
    body: "Create BI dashboards, KPI systems, ETL pipelines, lead scoring, and predictive analytics that make performance easier to measure.",
    image: "/assets/images/solutions/data-intelligence.png",
  },
  {
    category: "Security",
    title: "Security Enhancements",
    body: "Strengthen systems with threat modeling, zero-trust architecture, secure access controls, audit logging, and monitoring foundations.",
    image: "/assets/images/solutions/security-enhancements.png",
  },
];

export function SolutionsSection() {
  return (
    <section className={styles.section} aria-labelledby="solutions-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="solutions-title" className={styles.heading}>
            <span>Challenges We Solved.</span> We turn complex business challenges into
            connected systems built to perform, adapt, and scale.
          </h2>
        </div>

        <div className={styles.grid}>
          {solutions.map((solution, index) => (
            <article className={styles.card} key={solution.title} tabIndex={0}>
              <div className={styles.visual}>
                {solution.image ? (
                  <Image
                    src={solution.image}
                    alt={`${solution.title} illustration`}
                    fill
                    sizes="(max-width: 620px) 100vw, (max-width: 1080px) 50vw, 25vw"
                    className={styles.visualImage}
                  />
                ) : (
                  <span className={styles.visualNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </div>

              <div className={styles.summary}>
                <span className={styles.type}>{solution.category}</span>
                <h3>{solution.title}</h3>
              </div>

              <div className={styles.hoverContent}>
                <span className={styles.type}>{solution.category}</span>
                <h3>{solution.title}</h3>
                <p>{solution.body}</p>
                <span className={styles.readMore}>
                  <span className={styles.readMoreLabel}>Read more</span>
                  <span className={styles.line} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
