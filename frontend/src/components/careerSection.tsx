import { career } from "../data/career";
import { CareerCard } from "./careerCards";
import type { Career } from "../types/career";
import styles from "./careerSection.module.scss";

export function CareerSection() {
  return (
    <section id="career" className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Carreira</h2>

        <div className={styles.careerGrid}>
          {career.map((item: Career) => (
            <CareerCard key={item.id} career={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
