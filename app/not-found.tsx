import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Spark } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-shell">
        <span className="not-found-mark" aria-hidden="true">
          <Spark />
        </span>
        <p className="section-eyebrow">
          <span>404</span>
          Page not found
        </p>
        <h1>
          This page isn&apos;t
          <br />
          <em>in the syllabus.</em>
        </h1>
        <p>
          The link may have changed, or the page may have moved. Head back to
          the portfolio to find your way.
        </p>
        <Link className="button button-primary" href="/">
          Back to the portfolio
          <ArrowUpRight />
        </Link>
      </div>
      <div className="not-found-orbit" aria-hidden="true" />
    </main>
  );
}
