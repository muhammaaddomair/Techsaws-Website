import { Plus_Jakarta_Sans } from "next/font/google";
import styles from "./top-automation-hero.module.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const countries = [
  "Australia",
  "Canada",
  "Germany",
  "Pakistan",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
];

export function TopAutomationHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.content}>
        <h1
          id="home-hero-title"
          className={`${styles.title} ${plusJakartaSans.className}`}
        >
          <span className={styles.accent}>Let&apos;s build</span>what&apos;s
          <br />
          next, together.
        </h1>

        <form
          className={`${styles.form} ${plusJakartaSans.className}`}
          action="/connect"
        >
          <div className={styles.fullField}>
            <label htmlFor="challenge">
              Your challenge/goal <span>*</span>
            </label>
            <textarea id="challenge" name="challenge" rows={2} required />
          </div>

          <div className={styles.field}>
            <label htmlFor="first-name">
              First Name <span>*</span>
            </label>
            <input id="first-name" name="firstName" type="text" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="last-name">
              Last Name <span>*</span>
            </label>
            <input id="last-name" name="lastName" type="text" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="company">
              Company name <span>*</span>
            </label>
            <input id="company" name="company" type="text" required />
          </div>

          <div className={styles.fullField}>
            <label htmlFor="country">
              Country <span>*</span>
            </label>
            <select id="country" name="country" defaultValue="" required>
              <option value="" disabled>
                Select a country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <label className={styles.verification}>
            <input type="checkbox" name="verification" required />
            <span className={styles.checkbox} aria-hidden="true" />
            <span>I&apos;m not a robot</span>
            <span className={styles.captchaMark} aria-hidden="true">
              ↻
              <small>reCAPTCHA</small>
            </span>
          </label>

          <div className={styles.legal}>
            <p>
              I would like to sign up with my email address to receive TechSaws
              communications with updates, valuable resources and useful tips.
            </p>
            <p>
              By submitting this form you confirm that you agree to TechSaws&apos;
              <strong> privacy policy.</strong>
            </p>
            <p>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>

          <button className={styles.submit} type="submit">
            Submit enquiry <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
