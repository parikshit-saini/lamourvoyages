import styles from "./SectionHeading.module.scss";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
  /** Use the large display size */
  display?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, align = "center", display = false }: Props) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={display ? styles.display : styles.title}>{title}</h2>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
