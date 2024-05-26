import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 h-6 w-full">
      <nav className="flex">
        <div className="mr-1">Tree</div>
        <h1 className="mr-2">
          <Link href="/" className="">
            FreeCreate
          </Link>
        </h1>
        <Link href="/" className="hidden sm:inline mr-2">
          browse
        </Link>
        <Link href="/about" className="mr-2">
          about
        </Link>
        <Link href="/donate" className="">
          donate
        </Link>
        <Link href="/profile" className="ml-auto mr-1">
          profile
        </Link>
      </nav>
    </header>
  );
}
