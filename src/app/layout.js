import { Viga, VT323 } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'


const viga = Viga({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-viga',
  weight: ['400']
})

const vt323 = VT323({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-vt323',
  weight: ['400']
})

export const metadata = {
  title: "Figma course",
  description: "Curso online de Figma. 12h de clases en directo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} ${viga.variable} overflow-x-hidden`}>{children}</body>
      <GoogleAnalytics gaId="G-L5HF1P01ES" />
    </html>
  );
}
