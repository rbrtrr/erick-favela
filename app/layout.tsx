import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutriólogo Erick Favela | Nutrición en Mexicali y Online",
  description:
    "Sitio oficial de Nutriólogo Erick Favela. Consulta presencial en Mexicali y atención online para México y USA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
