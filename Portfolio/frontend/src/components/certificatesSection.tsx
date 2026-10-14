import { certificates } from "../data/certificates";
import { CertificateCard } from "./certificatesCards";
import type { Certificates } from "../types/certificates";
import styles from "./certificatesSection.module.scss";

export function CertificatesSection() {
  return (
    <section id="certificate" className={styles.hero}>
      <div className={styles.hero__container}>
        <h2 className={styles.hero__title}>Certificados</h2>

        <div className={styles.cards}>
          {certificates.map((certificate: Certificates) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
