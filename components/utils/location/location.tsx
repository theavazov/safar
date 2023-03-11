import Link from "next/link";
import styles from "./location.module.css";

type Props = {
  location: string | any;
  title: string | any;
  parent?: {
    text: string | any;
    path: string;
  };
};

export function Location({ location, title, parent }: Props) {
  return (
    <div className={styles.location}>
      <h2 className={styles.title}>{title}</h2>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.node}>
          Главная
        </Link>
        <span className={styles.node}>/</span>
        {parent ? (
          <>
            <Link href={parent.path} className={styles.node}>
              {parent.text}
            </Link>
            <span className={styles.node}>/</span>
          </>
        ) : null}
        <p className={styles.node}>{location}</p>
      </nav>
    </div>
  );
}
