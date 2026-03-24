import Link from "next/link";

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
      }}
    >
      <Link href="/">Bloggify</Link>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}

export default Navbar;
