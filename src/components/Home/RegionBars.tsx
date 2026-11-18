"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AboutBento.module.scss";

type Props = {
  bars: { label: string; count: number }[];
  total: number;
};

/** Progress bars that fill the first time they scroll into view. */
export default function RegionBars({ bars, total }: Props) {
  const ref = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ul className={styles.bars} ref={ref}>
      {bars.map((b) => (
        <li key={b.label}>
          <div className={styles.barLabel}>
            <span>{b.label}</span>
            <b>
              {b.count} {b.count === 1 ? "tour" : "tours"}
            </b>
          </div>
          <div className={styles.barTrack}>
            <div className={styles.barFill} style={{ width: visible ? `${(b.count / total) * 100}%` : 0 }} />
          </div>
        </li>
      ))}
    </ul>
  );
}
