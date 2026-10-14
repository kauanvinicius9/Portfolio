import type { Certificates } from "../types/certificates";
import styles from "./certificatesCards.module.scss";

interface Props {
  certificate: Certificates;
}

export function CertificateCard({ certificate }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <h3 className={styles.card__course}>{certificate.course}</h3>
        <p className={styles.card__institution}>{certificate.institution}</p>
        <p className={styles.card__duration}>{certificate.duration}</p>
      </div>
    </div>
  );
}
