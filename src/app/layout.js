import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zindo - Ecosistema de Historiales y Activos",
  description:
    "Plataforma regional multi-rubro para el seguimiento de vehículos, mascotas y más.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-slate-950 text-slate-100 antialiased min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
