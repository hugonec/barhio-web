import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Barhio",
  description: "How Barhio handles your personal data.",
};

export default function PrivacyPage() {
  return (
    <article className="legal-prose">
      <header className="legal-header">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: 30 May 2026</p>
      </header>

      <section>
        <h2>1. Data controller</h2>
        <p>
          The data controller is Hugo Nectoux (autónomo), Spain, contactable at{" "}
          <a href="mailto:hugo@barhio.com">hugo@barhio.com</a> and at the postal
          address shown in our Aviso Legal. For any privacy matter, write to{" "}
          <a href="mailto:hugo@barhio.com">hugo@barhio.com</a>.
        </p>
      </section>

      <section>
        <h2>2. What data we collect and why</h2>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Examples</th>
                <th>Purpose</th>
                <th>Legal basis (GDPR Art. 6)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Account data</td>
                <td>
                  email, password hash, username, display name, avatar, bio
                </td>
                <td>Create &amp; manage your account</td>
                <td>Contract (6.1.b)</td>
              </tr>
              <tr>
                <td>Saved places</td>
                <td>
                  place IDs, visited/wishlist status, your 1–5★ ratings, notes,
                  date saved
                </td>
                <td>Core service: your saved places</td>
                <td>Contract (6.1.b)</td>
              </tr>
              <tr>
                <td>Lists</td>
                <td>
                  list titles, descriptions, ordering, public/private flag,
                  public slug
                </td>
                <td>Create &amp; share lists</td>
                <td>Contract (6.1.b)</td>
              </tr>
              <tr>
                <td>Social graph</td>
                <td>friend requests, accepted friendships</td>
                <td>Friend features &amp; friend ratings</td>
                <td>Contract (6.1.b)</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>device location while using the map</td>
                <td>Center the map, show nearby/saved places</td>
                <td>Consent (6.1.a) via OS permission</td>
              </tr>
              <tr>
                <td>Device &amp; push</td>
                <td>Expo push token, device type</td>
                <td>Send notifications you enabled</td>
                <td>Consent / Contract</td>
              </tr>
              <tr>
                <td>Restaurant Pro</td>
                <td>business contact, claim verification, billing status</td>
                <td>Provide &amp; bill the Pro service</td>
                <td>Contract (6.1.b)</td>
              </tr>
              <tr>
                <td>Payment data</td>
                <td>handled by Stripe; we receive status, not full card data</td>
                <td>Process subscriptions</td>
                <td>Contract (6.1.b) / Legal obligation (accounting)</td>
              </tr>
              <tr>
                <td>Capture inputs</td>
                <td>
                  the Instagram/Google Maps URL you choose to share to Barhio
                </td>
                <td>Extract a place from the URL</td>
                <td>Consent / Contract (you initiate it)</td>
              </tr>
              <tr>
                <td>Google Maps import</td>
                <td>
                  places you choose to import from your existing Google saved
                  places
                </td>
                <td>Bulk-import them into your Barhio account</td>
                <td>Consent (6.1.a) — you trigger and authorise it</td>
              </tr>
              <tr>
                <td>Usage/diagnostics</td>
                <td>basic logs, error data</td>
                <td>Security, maintenance</td>
                <td>Legitimate interests (6.1.f)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>3. AI-assisted place extraction</h2>
        <p>
          When you share a link (e.g. an Instagram URL) to Barhio, that URL is
          sent to Anthropic&apos;s Claude API (via our secure server function)
          to identify the place referenced, then matched against Google Places.
          We send the URL and minimal context — not your account identity
          beyond what is needed to return the result.
        </p>
      </section>

      <section>
        <h2>3b. Google Maps import</h2>
        <p>
          If you choose to import your existing Google Maps saved places, you
          authorise Barhio to read the places you select from your Google
          account and copy them into your Barhio account as your saved places.
          We import only the place data needed for that purpose and do not
          access unrelated Google account data. You can delete imported places
          individually or in bulk at any time.
        </p>
      </section>

      <section>
        <h2>4. How content is shared with other users</h2>
        <ul>
          <li>
            Your saves are private by default and visible only to accepted
            friends per your settings.
          </li>
          <li>
            A public list is accessible to anyone with the link, including
            non-users, and shows the list name, places, and ratings you chose to
            include.
          </li>
          <li>
            Friend ratings you give are visible, in aggregated and individual
            form, to your accepted friends on the relevant place page.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Recipients / processors</h2>
        <p>
          We share data with service providers acting on our instructions:
        </p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Role</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Supabase</td>
                <td>Auth, database, storage, realtime — EU region</td>
                <td>Account, saved places, lists, social graph, avatars</td>
              </tr>
              <tr>
                <td>Google Places</td>
                <td>Place lookup</td>
                <td>Search terms, place IDs</td>
              </tr>
              <tr>
                <td>Mapbox</td>
                <td>Map rendering</td>
                <td>Coordinates / map tiles requests</td>
              </tr>
              <tr>
                <td>Anthropic (Claude API)</td>
                <td>AI place extraction</td>
                <td>Shared URLs</td>
              </tr>
              <tr>
                <td>Stripe</td>
                <td>Restaurant payments</td>
                <td>Billing data (restaurant users)</td>
              </tr>
              <tr>
                <td>Expo (push)</td>
                <td>Notifications</td>
                <td>Push token</td>
              </tr>
              <tr>
                <td>Vercel</td>
                <td>Web hosting (public lists, dashboard)</td>
                <td>Web request data</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>We do not sell your personal data.</strong>
        </p>
      </section>

      <section>
        <h2>6. International transfers</h2>
        <p>
          Your core account data is stored in the EU/EEA (Supabase, EU region).
          Some processors are based in the United States and may process limited
          data there: Anthropic (shared URLs for place extraction), Stripe
          (restaurant billing), Google (Places lookups and, if you use it, Maps
          import), Mapbox and Vercel (web requests), and Expo (push tokens).
        </p>
        <p>
          For these transfers we rely on appropriate safeguards under the GDPR —
          the EU Standard Contractual Clauses and/or, where applicable, the
          EU–US Data Privacy Framework. You can request details of the
          safeguards at <a href="mailto:hugo@barhio.com">hugo@barhio.com</a>.
        </p>
      </section>

      <section>
        <h2>7. Retention</h2>
        <ul>
          <li>Account data: kept while your account is active.</li>
          <li>
            On account deletion: personal data is deleted or anonymised, except
            data we must keep by law (e.g. invoicing/accounting records for
            restaurant subscriptions — generally kept for the periods required
            under Spanish tax and commercial law) and short-term backups.
          </li>
          <li>
            Public-list copies already obtained by others (e.g. a shared URL
            screenshot) are outside our control.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Your rights</h2>
        <p>
          Under GDPR you may: access your data; rectify it; erase it; restrict
          or object to processing; port your data; and withdraw consent at any
          time (e.g. location, notifications) without affecting prior
          processing. Exercise these at{" "}
          <a href="mailto:hugo@barhio.com">hugo@barhio.com</a>. You may also
          complain to a supervisory authority. As the controller is established
          in Spain, the lead authority is the AEPD (
          <a
            href="https://www.aepd.es"
            rel="noopener noreferrer"
            target="_blank"
          >
            aepd.es
          </a>
          ); users in France may also contact the CNIL (
          <a
            href="https://www.cnil.fr"
            rel="noopener noreferrer"
            target="_blank"
          >
            cnil.fr
          </a>
          ).
        </p>
      </section>

      <section>
        <h2>9. Minors</h2>
        <p>
          The Service is intended for users aged 16 and over and is not directed
          at children. We do not knowingly collect data from anyone below that
          age.
        </p>
      </section>

      <section>
        <h2>10. Security</h2>
        <p>
          We use RLS at the database level, encrypted secrets, and provider-side
          security. No system is perfectly secure; we will notify you and the
          authority of qualifying breaches as required.
        </p>
      </section>

      <section>
        <h2>11. Automated decision-making</h2>
        <p>
          We do not make decisions producing legal or similarly significant
          effects about you by purely automated means. Friend ratings are
          aggregations of human ratings, not profiling of you.
        </p>
      </section>

      <section>
        <h2>12. Changes</h2>
        <p>
          We will post updates here and change the &quot;Last updated&quot;
          date; material changes will be notified.
        </p>
      </section>

      <p className="legal-contact">
        Contact:{" "}
        <a href="mailto:hugo@barhio.com">hugo@barhio.com</a>
      </p>
    </article>
  );
}
