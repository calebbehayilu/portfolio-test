import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-5 backdrop-blur-lg">
      <div className="flex justify-between items-center">
        <h1 className="px-5">(❁´◡`❁)</h1>
        <div className="flex"></div>
        <ul className="flex">
          <li className="mr-6">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-6">
            <Link href="/about">About</Link>
          </li>
          <li className="mr-6">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="mr-6">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
