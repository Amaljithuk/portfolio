import HeroPortrait from "@/components/HeroPortrait";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import SiteHeader from "@/components/SiteHeader";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  Code,
  Compass,
  GraduationCap,
  MapPin,
  Spark,
} from "@/components/Icons";
import {
  compilerStages,
  education,
  experience,
  research,
  site,
  stats,
} from "@/lib/data";

const marqueeWords = [
  "Computer Science",
  "Teaching",
  "Compiler Principles",
  "Mentorship",
];

export default function Home() {
  const year = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: site.institution,
      url: site.institutionUrl,
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Nadar Saraswathi College of Arts and Science, Theni",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "College of Applied Science, IHRD, Kuttikanam, Peermade",
      },
    ],
    knowsAbout: [
      "Computer Science",
      "Compiler Principles",
      "Computer Science Education",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kasaragod",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />

      <div id="top" className="page">
        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-grid section-shell">
              <div className="hero-copy">
                <p className="hero-kicker">
                  <span className="kicker-dot" aria-hidden="true" />
                  Assistant Professor
                  <span className="kicker-rule" aria-hidden="true" />
                  Computer Science
                </p>

                <h1 className="hero-title" id="hero-title">
                  <span className="title-line">
                    <span>Shafna</span>
                  </span>
                  <span className="title-line">
                    <span className="title-accent">Majeed</span>
                  </span>
                </h1>

                <p className="hero-credentials">
                  M.Sc. Computer Science &amp; IT
                  <span aria-hidden="true">·</span>
                  UGC-NET 2012
                </p>

                <p className="hero-lede">
                  An educator shaping how students understand computers, code,
                  and the principles beneath them — from lecture halls to higher
                  secondary classrooms.
                </p>

                <div className="hero-actions">
                  <a className="button button-primary" href="#about">
                    <span>Explore my journey</span>
                    <ArrowDown />
                  </a>
                  <a className="button button-ghost" href="#contact">
                    <span>Get in touch</span>
                    <ArrowUpRight />
                  </a>
                  {site.cvUrl ? (
                    <a
                      className="button button-text"
                      href={site.cvUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>View CV</span>
                      <ArrowUpRight />
                    </a>
                  ) : null}
                </div>

                <dl className="hero-stats">
                  {stats.map((stat) => (
                    <div className="hero-stat" key={stat.label}>
                      <dt>{stat.label}</dt>
                      <dd>{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <HeroPortrait />
            </div>

            <div className="hero-bottom section-shell">
              <a className="scroll-cue" href="#about">
                <span className="scroll-cue-line" aria-hidden="true" />
                <span>Scroll to explore</span>
                <ArrowDown />
              </a>
              <p className="hero-location">
                <MapPin />
                {site.location}
              </p>
            </div>
          </section>

          <Marquee />

          <section className="section about" id="about" aria-labelledby="about-title">
            <div className="section-shell">
              <SectionHeading
                id="about-title"
                index="01"
                label="About"
                title={
                  <>
                    A teacher at heart.
                    <br />
                    <em>
                      A computer scientist
                      <br />
                      by training.
                    </em>
                  </>
                }
                intro="Nearly two decades of teaching, across university, college, and higher secondary classrooms — with computer science as the constant."
              />

              <div className="about-grid">
                <div className="about-story">
                  <p className="about-lede" data-reveal>
                    Shafna Majeed is an Assistant Professor in the Department of
                    Computer Science at Government College, Kasaragod.
                  </p>

                  <div className="about-columns">
                    <p data-reveal data-delay="1">
                      Her teaching career began in 2006 as a Lecturer in Computer
                      Science (on contract) at the Centre for Computer Science and
                      IT, University of Calicut, Manjeri. She went on to teach at A
                      M Jain College in Chennai and GVHSS, Pullanur in Malappuram,
                      before joining Government College, Kasaragod in August 2021.
                    </p>
                    <p data-reveal data-delay="2">
                      She holds an M.Sc. in Computer Science and IT from Nadar
                      Saraswathi College of Arts and Science, Theni, and a B.Sc. in
                      Computer Science from the College of Applied Science, IHRD,
                      Kuttikanam, Peermade. She cleared the UGC-NET in June 2012.
                    </p>
                  </div>

                  <div className="award-strip" data-reveal data-delay="3">
                    <span className="award-strip-icon">
                      <Award />
                    </span>
                    <span>
                      <strong>Best Outgoing Student</strong>
                      <small>
                        Nadar Saraswathi College of Arts and Science
                      </small>
                    </span>
                    <Spark className="award-strip-spark" aria-hidden="true" />
                  </div>
                </div>

                <aside className="profile-card" data-reveal data-delay="2">
                  <div className="profile-card-head">
                    <span>At a glance</span>
                    <Compass aria-hidden="true" />
                  </div>
                  <dl className="profile-list">
                    <div>
                      <dt>Current role</dt>
                      <dd>Assistant Professor, Computer Science</dd>
                    </div>
                    <div>
                      <dt>Department</dt>
                      <dd>Computer Science</dd>
                    </div>
                    <div>
                      <dt>Institution</dt>
                      <dd>Government College, Kasaragod</dd>
                    </div>
                    <div>
                      <dt>Teaching since</dt>
                      <dd>2006</dd>
                    </div>
                    <div>
                      <dt>Research interest</dt>
                      <dd>Principles in Compiler</dd>
                    </div>
                  </dl>
                  <a
                    className="profile-card-link"
                    href={site.institutionUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Government College, Kasaragod</span>
                    <ArrowUpRight />
                  </a>
                </aside>
              </div>
            </div>
          </section>

          <section
            className="section education"
            id="education"
            aria-labelledby="education-title"
          >
            <div className="section-shell">
              <SectionHeading
                id="education-title"
                index="02"
                label="Education"
                title={
                  <>
                    A foundation built in
                    <br />
                    <em>computer science.</em>
                  </>
                }
                intro="From school in Kanjirapally to postgraduate study in Theni — a path shaped by curiosity about how computers work."
              />

              <div className="edu-grid">
                {education.map((item, index) => (
                  <article
                    className={`edu-card${item.accent ? " edu-card-accent" : ""}`}
                    key={item.title}
                    data-reveal
                    data-delay={index > 0 ? String(index) : undefined}
                  >
                    <div className="edu-card-top">
                      <span className="edu-kind">{item.kind}</span>
                      <span className="edu-index">{item.index}</span>
                    </div>
                    <span className="edu-icon" aria-hidden="true">
                      {item.index === "01" ? (
                        <Check />
                      ) : item.index === "04" ? (
                        <BookOpen />
                      ) : (
                        <GraduationCap />
                      )}
                    </span>
                    <h3>{item.title}</h3>
                    <p className="edu-institution">{item.institution}</p>
                    <div className="edu-card-foot">
                      <span>{item.period}</span>
                      <span className="edu-detail">{item.detail}</span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="education-note" data-reveal>
                <span className="education-note-mark" aria-hidden="true">
                  ✳
                </span>
                <p>
                  Cleared the <strong>UGC National Eligibility Test</strong> in
                  June 2012 — a national benchmark for university teaching in
                  India.
                </p>
              </div>
            </div>
          </section>

          <section
            className="section experience"
            id="experience"
            aria-labelledby="experience-title"
          >
            <div className="section-shell">
              <SectionHeading
                id="experience-title"
                index="03"
                label="Experience"
                title={
                  <>
                    A journey through
                    <br />
                    <em>the classroom.</em>
                  </>
                }
                intro="Four chapters across Kerala and Tamil Nadu, each one spent making computer science more accessible to the next group of students."
              />

              <ol className="timeline">
                {experience.map((job, index) => (
                  <li
                    className={`timeline-item${job.current ? " is-current" : ""}`}
                    key={`${job.start}-${job.institution}`}
                    data-reveal
                    data-delay={index > 0 ? String(Math.min(index, 3)) : undefined}
                  >
                    <div className="timeline-meta">
                      <span className="timeline-year">{job.start}</span>
                      <span className="timeline-period">{job.period}</span>
                    </div>
                    <div className="timeline-track" aria-hidden="true">
                      <span className="timeline-dot" />
                    </div>
                    <article className="timeline-card">
                      <div className="timeline-role">
                        <h3>{job.role}</h3>
                        {job.current ? (
                          <span className="current-pill">
                            <span aria-hidden="true" />
                            Current
                          </span>
                        ) : null}
                      </div>
                      {job.subject ? (
                        <p className="timeline-subject">{job.subject}</p>
                      ) : null}
                      <p className="timeline-institution">{job.institution}</p>
                      <p className="timeline-location">
                        <MapPin aria-hidden="true" />
                        {job.location}
                      </p>
                    </article>
                  </li>
                ))}
              </ol>

              <div className="experience-footer" data-reveal>
                <span className="experience-rule" aria-hidden="true" />
                <p>
                  <span>Now</span>
                  Teaching at Government College, Kasaragod.
                </p>
                <a href={site.institutionUrl} target="_blank" rel="noreferrer">
                  Visit institution <ArrowUpRight />
                </a>
              </div>
            </div>
          </section>

          <section
            className="section research"
            id="research"
            aria-labelledby="research-title"
          >
            <div className="research-orb" aria-hidden="true" />
            <div className="research-grid section-shell">
              <div className="research-copy">
                <p className="section-eyebrow is-light">
                  <span>04</span>
                  Research
                </p>
                <h2 className="research-title" id="research-title" data-reveal>
                  The principles
                  <br />
                  <em>behind the programs.</em>
                </h2>
                <p className="research-intro" data-reveal data-delay="1">
                  {research.summary}
                </p>

                <div className="research-focus" data-reveal data-delay="2">
                  <span className="research-focus-label">Research interest</span>
                  <strong>
                    <Code aria-hidden="true" />
                    {research.title}
                  </strong>
                </div>

                <ul className="tag-list" data-reveal data-delay="3">
                  {research.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>

              <div className="compiler-card" data-reveal data-delay="1">
                <div className="compiler-chrome">
                  <span className="chrome-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="chrome-title">compiler.pipeline</span>
                  <span className="chrome-status">
                    <i aria-hidden="true" />
                    active
                  </span>
                </div>

                <div className="compiler-body">
                  <span className="compiler-flow" aria-hidden="true">
                    <span className="flow-dot" />
                  </span>
                  {compilerStages.map((stage) => (
                    <div className="compiler-stage" key={stage.step}>
                      <span className="compiler-step">{stage.step}</span>
                      <div className="compiler-stage-main">
                        <div className="compiler-stage-title">
                          <strong>{stage.title}</strong>
                          <code>{stage.code}</code>
                        </div>
                        <p>{stage.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="compiler-footer">
                  <span>
                    <i aria-hidden="true" />
                    Pipeline running
                  </span>
                  <span>source → target</span>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section contact"
            id="contact"
            aria-labelledby="contact-title"
          >
            <div className="contact-rings" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="contact-grid section-shell">
              <div className="contact-copy">
                <p className="section-eyebrow is-light">
                  <span>05</span>
                  Contact
                </p>
                <h2 id="contact-title" data-reveal>
                  Let&apos;s start a<br />
                  <em>conversation.</em>
                </h2>
                <p data-reveal data-delay="1">
                  For academic collaborations, guest lectures, or a conversation
                  about computer science education, reach out through the
                  department.
                </p>
                <div className="contact-signature" data-reveal data-delay="2">
                  <span className="signature-mark">SM</span>
                  <span>
                    <strong>{site.name}</strong>
                    <small>Assistant Professor · Computer Science</small>
                  </span>
                </div>
              </div>

              <div className="contact-card" data-reveal data-delay="2">
                <div className="contact-status">
                  <span aria-hidden="true" />
                  Academic profile
                </div>
                <dl className="contact-details">
                  <div>
                    <dt>Department</dt>
                    <dd>Computer Science</dd>
                  </div>
                  <div>
                    <dt>Institution</dt>
                    <dd>Government College, Kasaragod</dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>Kasaragod, Kerala, India</dd>
                  </div>
                </dl>

                <div className="contact-actions">
                  <a
                    className="button button-dark"
                    href={site.institutionUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Visit college website</span>
                    <ArrowUpRight />
                  </a>
                  {site.email ? (
                    <a className="button button-outline" href={`mailto:${site.email}`}>
                      <span>Email</span>
                      <ArrowUpRight />
                    </a>
                  ) : null}
                  {site.linkedin ? (
                    <a
                      className="button button-outline"
                      href={site.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight />
                    </a>
                  ) : null}
                </div>

                <p className="contact-note">
                  Open to academic conversations, student mentoring, and
                  collaborations around computer science.
                </p>
              </div>
            </div>

            <div className="contact-marquee" aria-hidden="true">
              <div>
                {[...marqueeWords, ...marqueeWords].map((word, index) => (
                  <span key={`${word}-${index}`}>
                    {word}
                    <Spark />
                  </span>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-top section-shell">
            <a className="brand footer-brand" href="#top" aria-label="Back to top">
              <span className="brand-mark" aria-hidden="true">
                <span>SM</span>
              </span>
              <span className="brand-text">
                <strong>Shafna Majeed</strong>
                <small>Computer Science</small>
              </span>
            </a>

            <nav aria-label="Footer navigation">
              <a href="#about">About</a>
              <a href="#education">Education</a>
              <a href="#experience">Experience</a>
              <a href="#research">Research</a>
              <a href="#contact">Contact</a>
            </nav>

            <a className="back-to-top" href="#top">
              Back to top <ArrowUp />
            </a>
          </div>

          <div className="footer-wordmark" aria-hidden="true">
            Shafna Majeed
          </div>

          <div className="footer-bottom section-shell">
            <span>© {year} Shafna Majeed</span>
            <span>Kasaragod, Kerala</span>
            <span>
              Built with Next.js <span aria-hidden="true">✳</span>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
