import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`box ${styles.footer_inner}`}>
        <div className={styles.footer_top}></div>
        <div className={styles.footer_bottom}>
          <p>Все права защищены © {new Date().getFullYear()}</p>
          <p>Design by Mazmoon group</p>
        </div>
      </div>
    </footer>
  );
}
