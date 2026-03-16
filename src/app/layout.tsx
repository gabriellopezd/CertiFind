import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://certifind.intellecto.com.co"),
  title: {
    default: "CertiFind | Validación de Certificados Oficiales",
    template: "%s | CertiFind"
  },
  description: "Plataforma oficial para la consulta, validación y descarga de certificados de capacitación y participación.",
  openGraph: {
    title: "CertiFind | Validación de Certificados",
    description: "Consulta y descarga tus certificados oficiales de forma instantánea.",
    url: "https://certifind.intellecto.com.co",
    siteName: "CertiFind",
    locale: "es_CO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
