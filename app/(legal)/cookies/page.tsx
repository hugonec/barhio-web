import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy — Barhio",
  description: "How barhio.com uses cookies.",
};

export default function CookiesPage() {
  return (
    <article className="legal-prose">
      <header className="legal-header">
        <h1>Cookies Policy</h1>
        <p className="legal-updated">Last updated: 30 May 2026</p>
      </header>

      <section>
        <h2>1. What cookies are</h2>
        <p>
          Small files stored on your device by a website. Some are essential;
          others require consent.
        </p>
      </section>

      <section>
        <h2>2. Cookies we use</h2>
        <p>
          At launch, barhio.com uses only strictly necessary cookies — no
          analytics, advertising, or tracking cookies. Strictly necessary
          cookies do not require prior consent.
        </p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Cookie / type</th>
                <th>Purpose</th>
                <th>Category</th>
                <th>Consent needed?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Session / authentication (restaurant dashboard)</td>
                <td>Keep a logged-in restaurant owner signed in</td>
                <td>Strictly necessary</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Security / load balancing (Vercel, Supabase)</td>
                <td>Operate and protect the site</td>
                <td>Strictly necessary</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Stripe (payment pages)</td>
                <td>
                  Securely process a restaurant subscription you requested
                </td>
                <td>Strictly necessary for the requested service</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>3. Managing cookies</h2>
        <p>
          Because we use only strictly necessary cookies, no consent banner is
          required. You can still block or delete cookies in your browser
          settings; blocking strictly necessary cookies may break parts of the
          site (for example, the restaurant login or payment pages). If we
          introduce non-essential cookies in future, we will add a consent tool
          here.
        </p>
      </section>

      <section>
        <h2>4. Changes</h2>
        <p>We will update this policy as our use of cookies changes.</p>
      </section>

      <p className="legal-contact">
        Contact:{" "}
        <a href="mailto:hugo@barhio.com">hugo@barhio.com</a>
      </p>
    </article>
  );
}
