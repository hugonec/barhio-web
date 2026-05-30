import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function WordmarkLink() {
  return (
    <Link href="/" className="logo-img" aria-label="Barhio">
      <Image
        src="/barhio-woodmark.png"
        alt="Barhio"
        width={1200}
        height={1400}
        priority
      />
    </Link>
  );
}

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav>
        <WordmarkLink />
        <div className="nav-right">
          <Link href="/" className="cta-nav">
            Back to home
          </Link>
        </div>
      </nav>

      <main className="legal-page">{children}</main>

      <footer>
        <WordmarkLink />
        <ul className="footer-links">
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/terms">Terms</Link>
          </li>
          <li>
            <Link href="/cookies">Cookies</Link>
          </li>
          <li>
            <a href="mailto:hello@barhio.com">Contact</a>
          </li>
          <li>
            <a href="https://instagram.com/barhio">Instagram</a>
          </li>
        </ul>
        <span className="footer-copy">© 2026 Barhio</span>
      </footer>
    </>
  );
}
