import Link from "next/link";
import type { ReactNode } from "react";

function WordmarkLink() {
  return (
    <Link href="/" className="logo-mark" aria-label="Barhio">
      <span className="logo-mark-wordmark">
        <span className="logo-bar">bar</span>
        <span className="logo-hio">hio</span>
      </span>
      <span className="logo-mark-tagline">word of mouth, only better</span>
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
