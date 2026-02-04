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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`antialiased ${bricolageGrotesque.variable} ${geistSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
