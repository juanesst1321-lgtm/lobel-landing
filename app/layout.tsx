import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOBEL ERP — Sistema de Gestión Empresarial Colombiano",
  description:
    "ERP en la nube para pymes colombianas. Facturación electrónica DIAN, contabilidad, nómina, inventario y más. Desde $150.000/mes.",
  openGraph: {
    title: "LOBEL ERP",
    description: "El ERP colombiano diseñado para tu empresa",
    url: "https://www.lobelapp.com",
    siteName: "LOBEL ERP",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
