export const site = {
  name: "Shafna Majeed",
  firstName: "Shafna",
  lastName: "Majeed",
  role: "Assistant Professor",
  credentials: "M.Sc., UGC-NET",
  field: "Computer Science",
  department: "Department of Computer Science",
  institution: "Government College, Kasaragod",
  institutionShort: "Government College, Kasaragod",
  institutionUrl: "https://gck.ac.in",
  location: "Kasaragod, Kerala, India",
  teachingSince: "2006",
  tagline: "Computer science, taught with clarity and care.",
  description:
    "Assistant Professor in Computer Science at Government College, Kasaragod, with a teaching journey spanning university, college, and higher secondary classrooms across Kerala and Tamil Nadu.",
  // Add these when you're ready to show them. Empty values are hidden automatically.
  email: "",
  linkedin: "",
  // Optional: add a PDF to /public and set this to e.g. "/shafna-majeed-cv.pdf"
  cvUrl: "",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "2006", label: "Teaching since" },
  { value: "04", label: "Institutions" },
  { value: "M.Sc.", label: "Computer Science & IT" },
] as const;

export const education = [
  {
    index: "01",
    kind: "National eligibility",
    title: "UGC-NET",
    institution: "National Eligibility Test",
    detail: "Qualified for Assistant Professor",
    period: "June 2012",
    accent: true,
  },
  {
    index: "02",
    kind: "Postgraduate",
    title: "M.Sc. Computer Science & IT",
    institution: "Nadar Saraswathi College of Arts and Science, Theni",
    detail: "Best Outgoing Student Award",
    period: "Postgraduate",
    accent: false,
  },
  {
    index: "03",
    kind: "Undergraduate",
    title: "B.Sc. Computer Science",
    institution: "College of Applied Science, IHRD, Kuttikanam, Peermade",
    detail: "Computer Science",
    period: "Undergraduate",
    accent: false,
  },
  {
    index: "04",
    kind: "Schooling",
    title: "AISSE & AISSCE",
    institution: "St. Antony's Public School and Junior College, Kanjirapally",
    detail: "School education",
    period: "School",
    accent: false,
  },
] as const;

export const experience = [
  {
    period: "Aug 2021 — Present",
    start: "2021",
    role: "Assistant Professor",
    subject: "Computer Science",
    institution: "Government College, Kasaragod",
    location: "Kasaragod, Kerala",
    current: true,
  },
  {
    period: "Jun 2018 — Jul 2021",
    start: "2018",
    role: "HSST (Jr) Computer Science",
    subject: "",
    institution: "GVHSS, Pullanur, Valluvambram",
    location: "Malappuram, Kerala",
    current: false,
  },
  {
    period: "Jun 2016 — Feb 2018",
    start: "2016",
    role: "Assistant Professor",
    subject: "Computer Science · Department of BCA",
    institution: "A M Jain College, Meenambakkam",
    location: "Chennai, Tamil Nadu",
    current: false,
  },
  {
    period: "Nov 2006 — Oct 2014",
    start: "2006",
    role: "Lecturer in Computer Science",
    subject: "On contract",
    institution: "Centre for Computer Science and IT (CCSIT), University of Calicut",
    location: "Manjeri, Kerala",
    current: false,
  },
] as const;

export const research = {
  title: "Principles in Compiler",
  summary:
    "Her research interest centres on the principles of compilers — the ideas and mechanisms that transform human-readable code into something a machine can execute.",
  topics: ["Compiler principles", "Language processing", "Computer science education"],
} as const;

export const compilerStages = [
  {
    step: "01",
    title: "Source",
    detail: "Human-readable code enters the pipeline.",
    code: "program.cs",
  },
  {
    step: "02",
    title: "Lexical",
    detail: "Characters become meaningful tokens.",
    code: "tokens[]",
  },
  {
    step: "03",
    title: "Syntax",
    detail: "Tokens are arranged into structure.",
    code: "syntax tree",
  },
  {
    step: "04",
    title: "Semantics",
    detail: "Meaning and correctness are checked.",
    code: "validated AST",
  },
  {
    step: "05",
    title: "Generate",
    detail: "The program becomes executable output.",
    code: "target code",
  },
] as const;
