import { League_Spartan, Geist } from "next/font/google";
import "./globals.css";

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${geistSans.className}`}>
        {children}
      </body>
    </html>
  );
}
