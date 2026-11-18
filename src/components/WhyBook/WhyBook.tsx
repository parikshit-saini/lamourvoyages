import Icon from "@/components/Icon/Icon";
import { whyBook } from "@/data/site";
import styles from "./WhyBook.module.scss";

export default function WhyBook() {
  return (
    <div className={styles.matrix}>
      {whyBook.map((item) => (
        <div key={item.title} className={styles.item}>
          <div className={`${styles.icon} ${styles[item.tone]}`}>
            <Icon name={item.icon} size={26} />
          </div>
          <div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
