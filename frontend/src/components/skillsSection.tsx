import { skills } from "../data/skills";
import { SkillCard } from "./skillsCards";
import type { Skills } from "../types/skills";
import styles from "./skillsSection.module.scss";

export function SkillsSection() {
  return (
    <section id="skills" className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Habilidades</h2>

        <div className={styles.skillGrid}>
          {skills.map((skill: Skills) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
