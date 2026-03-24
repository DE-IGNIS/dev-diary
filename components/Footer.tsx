import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>Bloggify</div>

        <nav className={styles.navLinks}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} className={styles.navLink}>
              {item.name}
            </Link>
          ))}
        </nav>

        <p className={styles.copyright}>
          © 2026 Bloggify. All rights reserved. Built with passion for the
          writing community.
        </p>
      </div>
    </footer>
  );
}
