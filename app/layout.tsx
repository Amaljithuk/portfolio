import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/lib/data";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shafna Majeed — Assistant Professor, Computer Science",
    template: "%s | Shafna Majeed",
  },
  description: site.description,
  applicationName: "Shafna Majeed — Academic Portfolio",
  category: "education",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Shafna Majeed" }],
  creator: "Shafna Majeed",
  keywords: [
    "Shafna Majeed",
    "Assistant Professor",
    "Computer Science",
    "Government College Kasaragod",
    "Compiler Principles",
    "UGC-NET",
    "Academic Portfolio",
  ],
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: "/",
    siteName: "Shafna Majeed",
    title: "Shafna Majeed — Assistant Professor, Computer Science",
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shafna Majeed — Assistant Professor in Computer Science",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shafna Majeed — Assistant Professor, Computer Science",
    description: site.description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
