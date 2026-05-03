import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Ana & Beto — 12 de Outubro de 2026",
  description:
    "Convite especial para o casamento de Ana Beatriz da Silva e Roberto Carlos de Oliveira. Celebre conosco no dia 12 de Outubro de 2026 na Igreja Matriz de Exemplo.",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
