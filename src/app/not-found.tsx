import Link from "next/link";
import PageHero from "@/components/PageHero/PageHero";
import styles from "@/styles/pages.module.scss";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page has wandered off"
        subtitle="The page you're looking for doesn't exist or has moved."
      />
      <section className={styles.section}>
        <div className={`container ${styles.notFound}`}>
          <Link href="/" className="btn btn--primary">Back to Home</Link>
          <Link href="/contact-us" className="btn btn--light">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
