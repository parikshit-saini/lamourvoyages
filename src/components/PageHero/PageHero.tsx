import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { images } from "@/data/site";
import styles from "./PageHero.module.scss";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  crumbs?: Crumb[];
};

export default function PageHero({ eyebrow, title, subtitle, image = images.hero, crumbs = [] }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <Image src={image} alt="" fill priority sizes="100vw" className={styles.bgImage} />
        <div className={styles.gradient} />
      </div>
      <div className={styles.inner}>
        <nav aria-label="Breadcrumb" className={styles.crumbs}>
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className={styles.crumb}>
              <Icon name="chevron_right" size={16} />
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <span className={styles.eyebrow}>
          <span className={styles.dot} /> {eyebrow}
        </span>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
