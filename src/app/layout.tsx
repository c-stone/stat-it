import "~/styles/globals.css";

import { Inter } from "next/font/google";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.webp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Stat-it",
  description:
    "Discover Stat-it: the ultimate universal game companion tailored for all your tabletop RPG and board game needs. Enhance your gaming experience with customizable features for every game.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <header className="flex justify-between p-3">
          <Image src={logo} alt="Company Logo" className="h-10 w-10" />
          <button>Account</button>
        </header>
        <div className="flex">
          <nav className="min-w-60 px-5">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/presets">Presets</Link>
              </li>
              <li>
                <Link href="/create-game">New Game</Link>
              </li>
              <li>
                <Link href="/settings">Settings</Link>
              </li>
            </ul>
          </nav>
          <div className="w-full">
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
