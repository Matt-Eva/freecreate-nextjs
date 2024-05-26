import Link from "next/link";

function Footer() {
  return (
    <footer className="fixed bottom-0 z-10 bg-red-100 w-full sm:hidden ">
      <nav>
        <Link href="/">🔍</Link>
        <Link href="/read">📖</Link>
        <Link href="/library">♥</Link>
      </nav>
    </footer>
  );
}

export default Footer;
