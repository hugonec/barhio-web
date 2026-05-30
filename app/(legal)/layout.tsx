import Link from "next/link";
import type { ReactNode } from "react";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/" className="logo">
          Bar<span className="dot">h</span>io
        </Link>
        <div className="nav-right">
          <Link href="/" className="cta-nav">
            Back to home
          </Link>
        </div>
      </nav>

      <main className="legal-page">{children}</main>

      <footer>
        <Link href="/" className="logo">
          Bar<span className="dot">h</span>io
        </Link>
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
