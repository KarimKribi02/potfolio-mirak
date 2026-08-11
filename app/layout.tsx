import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Karim Kribi | Développeur Full Stack",
  description: "Développeur Full Stack spécialisé dans le développement d'applications web modernes et performantes. Basé à Marrakech, Maroc.",
  keywords: ["Mohamed Karim Kribi", "Mohamed Karim", "Reda", "Développeur Full Stack", "Next.js", "NestJS", "Laravel", "Développeur Marrakech"],
  authors: [{ name: "Mohamed Karim Kribi" }],
  icons: {
    icon: [
      { url: "/images/logo1.png?v=2", type: "image/png" },
      { url: "/favicon.ico?v=2" },
    ],
    shortcut: ["/images/logo1.png?v=2"],
    apple: ["/images/logo1.png?v=2"],
  },
  openGraph: {
    title: "Mohamed Karim Kribi | Développeur Full Stack",
    description: "Portfolio officiel de Mohamed Karim Kribi, Développeur Full Stack.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${jakartaSans.variable} dark scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo1.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo1.png?v=2" />
      </head>
      <body className="bg-[#080808] text-white antialiased selection:bg-[#e50914] selection:text-white min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
