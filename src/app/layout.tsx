import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://certifind.intellecto.com.co"),
  title: {
    default: "CertiFind | Validación de Certificados Oficiales Intellecto",
    template: "%s | CertiFind"
  },
  description: "Plataforma oficial de Intellecto para la consulta, validación y descarga segura de certificados académicos.",
  keywords: ["Certificados", "Intellecto", "Validación Académica", "Diplomas", "CertiFind"],
  authors: [{ name: "Intellecto SAS" }],
  icons: {
    icon: "/previews/Logo.png",
  },
  openGraph: {
    title: "CertiFind | Validación de Certificados Oficiales",
    description: "Consulta y descarga tus certificados oficiales de Intellecto de forma instantánea.",
    url: "https://certifind.intellecto.com.co",
    siteName: "CertiFind Intellecto",
    images: [
      {
        url: "/previews/Logo.png",
        width: 1200,
        height: 630,
        alt: "CertiFind Portal de Certificados",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CertiFind | Validación de Certificados",
    description: "Valida tus logros académicos con Intellecto al instante.",
    images: ["/previews/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-accent/30 selection:text-white`}>
        <Header />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}