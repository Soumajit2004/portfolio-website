import "~/styles/globals.css";

import {Poppins, Space_Mono} from "next/font/google";
import {type Metadata} from "next";

import {TRPCReactProvider} from "~/trpc/react";

export const metadata: Metadata = {
  title: "Soumajit Ghosh",
  description: "Personal portfolio of soumajit ghosh",
  icons: [{rel: "icon", url: "/favicon.ico"}],
};

const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-mono'
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-sans'
})

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${space_mono.variable}`}>
    <body>
    <TRPCReactProvider>{children}</TRPCReactProvider>
    </body>
    </html>
  );
}
