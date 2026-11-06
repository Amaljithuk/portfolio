import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  invert?: boolean;
  className?: string;
};

export default function SectionHeading({
  id,
  index,
  label,
  title,
  intro,
  invert = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <header
      className={`section-heading${invert ? " is-invert" : ""}${className ? ` ${className}` : ""}`}
      data-reveal
    >
      <div className="section-heading-main">
        <p className="section-eyebrow">
          <span>{index}</span>
          {label}
        </p>
        <h2 className="section-title" id={id}>
          {title}
        </h2>
      </div>
      {intro ? (
        <p className="section-intro" data-reveal data-delay="1">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
