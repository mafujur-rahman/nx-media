import { Geist, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

export const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
});

export const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans",
});


export const metadata = {
  title: {
    default: "The NX Media",
    template: "%s | The NX Media",
  },
  description:
    "The NX Media provides cutting-edge digital solutions including web development, UI/UX design, branding, and scalable tech for startups and enterprises.",
  keywords: [
    "The NX Media",
    "Brand Identity",
    "Logo Design",
    "Packaging Design",
    "Social Media Branding",
    "Web Development",
    "UI UX Design",
    "Digital Agency",
    "Software Solutions",
    "Tech Company",
  ],
  authors: [{ name: "The NX Media" }],
  creator: "The NX Media",
  metadataBase: new URL("https://thenxmedia.com/"), 

  openGraph: {
    title: "The NX Media",
    description:
      "Innovative digital solutions for modern businesses. Build, scale, and grow with The NX Media.",
    url: "https://thenxmedia.com/",
    siteName: "The NX Media",
    images: [
      {
        url: "/images/nx-home.png",
        width: 1200,
        height: 630,
        alt: "The NX Media",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`antialiased ${bricolageGrotesque.variable} ${geistSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
