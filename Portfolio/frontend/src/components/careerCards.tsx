import type { Career } from "../types/career";
import styles from "./careerCards.module.scss";

interface Props {
  career: Career;
}

export function CareerCard({ career }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{career.title}</h3>
        <p className={styles.card__company}>{career.company}</p>
        <p className={styles.card__timeline}>{career.timeline}</p>
        <p className={styles.card__description}>{career.description}</p>
      </div>
    </div>
  );
}
