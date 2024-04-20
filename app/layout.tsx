import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Exo_2, Roboto_Mono } from 'next/font/google'
import {Providers} from './providers';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LoGONE - Welcome",
  description: "",
  icons: '/favicon/logone-favicon.png',
};

const exo2 = Exo_2({
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-exo-2',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${exo2.variable} font-sans`}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
  );
}
