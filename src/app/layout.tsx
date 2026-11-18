import type { Metadata, Viewport } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://lamourvoyages.com"),
  title: {
    default: "L'amour Voyages | Luxury Bespoke Tours across the Americas",
    template: "%s | L'amour Voyages",
  },
  description:
    "L'amour Voyages — a worldwide customized travel and hospitality service. Tailor-made tours of the USA, Canada and South America with 24/7 concierge from offices in the USA, UK, India and Canada.",
  openGraph: {
    siteName: "L'amour Voyages",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f9fb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
