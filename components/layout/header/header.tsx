import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import logo from "../../../public/media/logo.png";
import { bag, user } from "../../../public/icons";
import { useRouter } from "next/router";

export function Header() {
  const { pathname } = useRouter();

  const navigation = [
    {
      title: "О нас",
      path: "/about",
      isActive: pathname === "/about" ? true : false,
    },
    {
      title: "Новости",
      path: "/news",
      isActive: pathname.includes("/news") ? true : false,
    },
    {
      title: "Галерея",
      path: "/gallery",
      isActive: pathname === "/gallery" ? true : false,
    },
    {
      title: "FAQ",
      path: "/faq",
      isActive: pathname === "/faq" ? true : false,
    },
    {
      title: "Контакты",
      path: "/contact",
      isActive: pathname === "/contact" ? true : false,
    },
  ];

  return (
    <header className={styles.header}>
      <div className={`box ${styles.header_inner}`}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" />
        </Link>
        <nav className={styles.header_nav}>
          <p className={styles.nav_link}>Услуги</p>
          {navigation.map((nav: any, i: number) => {
            return (
              <Link
                key={i}
                href={nav.path}
                className={
                  nav.isActive
                    ? `${styles.nav_link} ${styles.active}`
                    : styles.nav_link
                }
              >
                {nav.title}
              </Link>
            );
          })}
        </nav>
        <nav className={styles.extra_nav}>
          <div className={styles.icons}>
            <Link href="/login">{user}</Link>
            <Link href="/cart">{bag}</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
