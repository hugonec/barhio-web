import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Barhio",
  description: "The terms governing your use of Barhio.",
};

export default function TermsPage() {
  return (
    <article className="legal-prose">
      <header className="legal-header">
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: 30 May 2026</p>
      </header>

      <section>
        <h2>1. Who we are and what this covers</h2>
        <p>
          These Terms govern your use of the Barhio mobile application and the
          barhio.com website (together, the &quot;Service&quot;), operated by
          Hugo Nectoux (&quot;we&quot;, &quot;us&quot;). By creating an account
          or using the Service you accept these Terms. If you do not agree, do
          not use the Service.
        </p>
      </section>

      <section>
        <h2>2. Eligibility</h2>
        <p>
          You must be at least 16 years old to use Barhio. By using the Service
          you confirm you meet this requirement and that the information you
          provide is accurate.
        </p>
      </section>

      <section>
        <h2>3. Accounts</h2>
        <ul>
          <li>You sign up with email/password or Google sign-in.</li>
          <li>
            You are responsible for your credentials and for activity under your
            account.
          </li>
          <li>
            You must choose a username that does not infringe third-party rights
            or impersonate others.
          </li>
          <li>
            We may suspend or terminate accounts that violate these Terms (see
            §11).
          </li>
        </ul>
      </section>

      <section>
        <h2>4. The Service — what Barhio does</h2>
        <p>
          Barhio lets you save places, rate and annotate them, organise them
          into lists, share lists, add friends, and see ratings from your
          accepted friends. Place information is retrieved from third-party
          sources (e.g. Google Places, Mapbox) and may contain errors; we
          provide it &quot;as is&quot; and do not warrant its accuracy or that a
          place is open, available, or as described.
        </p>
      </section>

      <section>
        <h2>5. Your content</h2>
        <ul>
          <li>
            <strong>Ownership.</strong> You keep ownership of the content you
            create (notes, ratings, list titles, list descriptions, avatar —
            &quot;User Content&quot;).
          </li>
          <li>
            <strong>Licence to us.</strong> You grant us a worldwide,
            non-exclusive, royalty-free licence to host, store, reproduce and
            display your User Content solely to operate and provide the Service
            (e.g. showing your public lists to recipients, showing your ratings
            to your friends). This licence ends when you delete the content or
            your account, except for backups retained for a limited period and
            content others have already lawfully copied (e.g. a public list
            URL).
          </li>
          <li>
            <strong>Responsibility.</strong> You are solely responsible for your
            User Content and confirm you have the rights to it. Do not post
            content that is unlawful, defamatory, hateful, infringing, or that
            reveals others&apos; personal data without basis.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Visibility and sharing rules</h2>
        <ul>
          <li>
            Your saves are private by default and visible only to your accepted
            friends per your settings.
          </li>
          <li>
            A list becomes publicly accessible only when you choose to make it
            public; a public list is reachable by anyone with the link and does
            not require an account to view.
          </li>
          <li>
            Friend ratings shown to others are aggregated from accepted-friend
            relationships.
          </li>
          <li>
            You must not scrape, bulk-export, or republish other users&apos;
            content outside the Service.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Acceptable use</h2>
        <p>
          You agree not to: misuse or disrupt the Service; reverse-engineer or
          circumvent security; upload malware; harvest data about other users;
          use the Service for spam or harassment; post false or manipulative
          ratings; or use automated means to access the Service without our
          consent.
        </p>
      </section>

      <section>
        <h2>8. Third-party services and links</h2>
        <p>
          The Service integrates third-party providers (maps, places, payments,
          notifications, AI place-extraction). Your use may also be subject to
          their terms. We are not responsible for third-party content or
          services.
        </p>
      </section>

      <section>
        <h2>9. Restaurant Pro (business users)</h2>
        <ul>
          <li>
            A restaurant owner may claim a place after email verification and
            subscribe to a paid plan.
          </li>
          <li>
            <strong>Pricing &amp; billing:</strong> €29/month, billed via
            Stripe, recurring until cancelled.
          </li>
          <li>
            <strong>Cancel anytime:</strong> cancellation stops future renewals;
            the plan remains active until the end of the current paid period.
          </li>
          <li>
            <strong>What payment buys:</strong> the ability to complete a
            restaurant profile (photos, menu, hours, links) and obtain a
            verified badge.
          </li>
          <li>
            <strong>What payment never buys:</strong> influence over ratings,
            feed placement, or recommendations. Ratings and rankings are organic
            and are never sold.
          </li>
          <li>
            The business user warrants it is authorised to represent the
            establishment it claims.
          </li>
        </ul>
      </section>

      <section>
        <h2>10. Disclaimers and liability</h2>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as
          available&quot;. To the maximum extent permitted by law, we exclude
          implied warranties and are not liable for indirect or consequential
          losses, or for decisions made in reliance on place data or friend
          ratings. Nothing limits liability that cannot be limited under
          applicable law (including consumer-protection rights you may have).
        </p>
      </section>

      <section>
        <h2>11. Suspension, termination and account deletion</h2>
        <ul>
          <li>
            You may delete your account at any time from Settings → Account →
            Delete account.
          </li>
          <li>
            On deletion, we delete or anonymise your personal data as described
            in the Privacy Policy, subject to lawful retention (e.g. accounting
            records for restaurant payments).
          </li>
          <li>
            We may suspend or terminate access for breach of these Terms, with
            notice where practicable.
          </li>
        </ul>
      </section>

      <section>
        <h2>12. Changes</h2>
        <p>
          We may update these Terms; we will notify you of material changes and
          update the &quot;Last updated&quot; date. Continued use after changes
          means acceptance.
        </p>
      </section>

      <section>
        <h2>13. Governing law and disputes</h2>
        <p>
          These Terms are governed by Spanish law. Disputes are subject to the
          courts of the consumer&apos;s domicile where mandatory consumer rules
          so require, and otherwise to the courts of Barcelona, España, without
          prejudice to mandatory consumer-protection rights and to your right
          to use the EU Online Dispute Resolution platform (
          <a
            href="https://ec.europa.eu/consumers/odr"
            rel="noopener noreferrer"
            target="_blank"
          >
            ec.europa.eu/consumers/odr
          </a>
          ).
        </p>
      </section>

      <p className="legal-contact">
        Contact:{" "}
        <a href="mailto:hugo@barhio.com">hugo@barhio.com</a>
      </p>
    </article>
  );
}
