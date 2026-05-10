import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { InstallAppPrompt } from "@/components/InstallAppPrompt";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orações Pastoral de Rua | Sagrada Família | Goiânia-GO | Brasil",
  description:
    "Orações Pastoral de Rua | Sagrada Família | Goiânia-GO | Brasil",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Pastoral de Rua",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <SpeedInsights />
        <Theme accentColor="orange">
          {children}
          <InstallAppPrompt />
        </Theme>
      </body>
    </html>
  );
}
