import "~/styles/globals.css";

import { Inter } from "next/font/google";

import Image from "next/image";
import { Toaster } from "~/components/ui/sonner";
import logo from "../../public/images/logo.webp";

import { ClerkProvider } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Track-it",
  description:
    "Discover Track-it: the ultimate universal game companion tailored for all your tabletop RPG and board game needs. Enhance your gaming experience with customizable features for every game.",
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
        <ClerkProvider>
          <header className="flex justify-between p-3">
            <Image src={logo} alt="Company Logo" className="h-10 w-10" />
            <UserButton />
          </header>
        </ClerkProvider>
        <div className="flex">
          <div className="w-full">
            <div>{children}</div>
          </div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}

{
  /* <nav className="min-w-60 px-5">
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
</nav> */
}
