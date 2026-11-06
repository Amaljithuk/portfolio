"use client";

import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/data";
import { ArrowUpRight, ArrowUp, Close, Menu } from "@/components/Icons";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setScrolled(doc.scrollTop > 18);
      setProgress(scrollable > 0 ? Math.min(doc.scrollTop / scrollable, 1) : 0);
      if (doc.scrollTop < 240) setActive("");
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(`#${visible.target.id}`);
      },
      {
        rootMargin: "-30% 0px -58% 0px",
        threshold: [0, 0.1, 0.4],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="Shafna Majeed — back to top">
            <span className="brand-mark" aria-hidden="true">
              <span>SM</span>
            </span>
            <span className="brand-text">
              <strong>Shafna Majeed</strong>
              <small>Computer Science</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={active === item.href ? "is-active" : ""}
              >
                <span className="nav-index" aria-hidden="true">
                  0{index + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-cta" href="#contact">
              <span>Get in touch</span>
              <ArrowUpRight />
            </a>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setOpen((current) => !current)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
        <div className="scroll-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-menu-inner">
          <p className="mobile-menu-label">Navigation</p>
          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                <span aria-hidden="true">0{index + 1}</span>
                {item.label}
                <ArrowUpRight />
              </a>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <div>
              <span>Based in</span>
              <strong>{site.location}</strong>
            </div>
            <div>
              <span>Currently</span>
              <strong>{site.institution}</strong>
            </div>
            <a
              href="#top"
              className="mobile-top-link"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              Back to top <ArrowUp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
