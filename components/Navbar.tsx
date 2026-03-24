import Link from "next/link";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Bloggify
      </Link>

      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/blog" className={styles.navLink}>
          Blog
        </Link>
        <Link href="/contact" className={styles.navLink}>
          Contact
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
