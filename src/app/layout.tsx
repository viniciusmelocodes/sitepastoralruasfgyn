import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orações Pastoral de Rua | Sagrada Família | Goiânia-GO | Brasil",
  description:
    "Orações Pastoral de Rua | Sagrada Família | Goiânia-GO | Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpeedInsights />
        <Theme accentColor="orange">{children}</Theme>
      </body>
    </html>
  );
}
