import { formations } from "../data/formations";
import { FormationCard } from "./formationsCards";
import type { Formations } from "../types/formations";
import styles from "./formationsSection.module.scss";

export function FormationsSection() {
  return (
    <section id="formation" className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Formações</h2>
        <div className={styles.cards}>
          {formations.map((formation: Formations) => (
            <FormationCard key={formation.id} formation={formation} />
          ))}
        </div>
      </div>
    </section>
  )
}
