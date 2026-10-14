import type { Formations } from "../types/formations";
import styles from "./formationsCards.module.scss";

interface Props {
  formation: Formations;
}

export function FormationCard({ formation }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <h3 className={styles.card__course}>{formation.course}</h3>
        <p className={styles.card__institution}>{formation.institution}</p>
        <p className={styles.card__courseType}>{formation.courseType}</p>
      </div>
    </div>
  );
}
